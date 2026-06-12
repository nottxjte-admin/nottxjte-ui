import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, RoundedBox, Float } from '@react-three/drei';
import * as THREE from 'three';

function ExplodedLayers() {
  const groupRef = useRef();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!groupRef.current) return;
      // Get the element's position relative to viewport
      // Fallback: just use pageYOffset mapped to 0-1 range approx
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const progress = height > 0 ? scrollY / height : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      // Smoothly interpolate the explosion distance based on scroll
      // Let's use a base target distance. The further down, the more exploded.
      // We'll multiply scroll progress by a factor to make it noticeable.
      // E.g., progress goes from 0.2 to 0.8 in the relevant area.
      
      const targetDist = scrollProgress * 5; 
      
      groupRef.current.children.forEach((child, i) => {
        // center is i=1 (we have 3 layers)
        const offset = (i - 1) * targetDist;
        child.position.z = THREE.MathUtils.lerp(child.position.z, offset, 0.1);
      });
      
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x = Math.sin(performance.now() / 2000) * 0.1;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.5, 0, 0]}>
      {/* Top Glass/Screen Layer */}
      <RoundedBox args={[3, 2, 0.05]} radius={0.02} smoothness={2} position={[0, 0, 1]}>
        <meshPhysicalMaterial color="#ffffff" transmission={0.9} opacity={1} transparent roughness={0} />
      </RoundedBox>
      
      {/* Middle Circuit/Core Layer */}
      <RoundedBox args={[2.8, 1.8, 0.1]} radius={0.05} smoothness={2} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
      </RoundedBox>
      
      {/* Bottom Chassis Layer */}
      <RoundedBox args={[3.1, 2.1, 0.2]} radius={0.1} smoothness={2} position={[0, 0, -1]}>
        <meshStandardMaterial color="#d0d0d0" metalness={0.6} roughness={0.4} />
      </RoundedBox>
    </group>
  );
}

export default function ExplodedView() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <ExplodedLayers />
        </Float>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
