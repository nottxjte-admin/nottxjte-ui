import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const generateParticles = (count) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  return positions;
};

function Particles({ count = 2000 }) {
  const meshRef = useRef();
  const lightRef = useRef();

  const particlesPosition = useMemo(() => generateParticles(count), [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.05;
      meshRef.current.rotation.x = t * 0.025;
    }
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(t * 0.5) * 3;
      lightRef.current.position.y = Math.cos(t * 0.3) * 3;
    }
  });

  return (
    <group>
      <pointLight ref={lightRef} distance={4} intensity={8} color="#0066cc" />
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#0066cc"
          sizeAttenuation={true}
          transparent={true}
          opacity={0.4}
          blending={THREE.NormalBlending}
        />
      </points>
    </group>
  );
}

export default function AmbientParticles() {
  return (
    <div className="w-full h-full rounded-[40px] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Particles count={1000} />
      </Canvas>
    </div>
  );
}
