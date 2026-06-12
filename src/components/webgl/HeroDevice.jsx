import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PresentationControls, ContactShadows, RoundedBox } from '@react-three/drei';

function DeviceModel() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(t / 4) / 4;
      meshRef.current.rotation.z = Math.sin(t / 4) / 4;
      meshRef.current.position.y = Math.sin(t / 1.5) / 10;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main Body */}
      <RoundedBox args={[2.5, 3.5, 0.4]} radius={0.15} smoothness={4} castShadow receiveShadow>
        <meshStandardMaterial color="#f0f0f0" roughness={0.1} metalness={0.8} />
      </RoundedBox>
      
      {/* Screen area */}
      <mesh position={[0, 0, 0.21]}>
        <planeGeometry args={[2.2, 3.2]} />
        <meshStandardMaterial color="#111" roughness={0.2} metalness={0.5} />
      </mesh>

      {/* Glowing core/accent */}
      <mesh position={[0, 0, 0.22]}>
        <circleGeometry args={[0.3, 32]} />
        <meshBasicMaterial color="#0077ff" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

export default function HeroDevice() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <PresentationControls
          global={false}
          config={{ mass: 2, tension: 500 }}
          snap={{ mass: 4, tension: 1500 }}
          rotation={[0, 0.2, 0]}
          polar={[-0.1, 0.1]}
          azimuth={[-0.4, 0.4]}
        >
          <Float rotationIntensity={0.2} speed={2} floatIntensity={0.5}>
            <DeviceModel />
          </Float>
        </PresentationControls>

        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2.5} far={4} color="#000000" />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
