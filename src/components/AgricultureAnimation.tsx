
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Cylinder, Plane } from '@react-three/drei';
import * as THREE from 'three';

// Floating Seed Component
const FloatingSeed = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={meshRef} position={position} args={[0.1, 8, 8]}>
      <meshStandardMaterial color="#8B4513" />
    </Sphere>
  );
};

// Growing Plant Component
const GrowingPlant = ({ position }: { position: [number, number, number] }) => {
  const stemRef = useRef<THREE.Mesh>(null);
  const leafRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const growth = (Math.sin(state.clock.elapsedTime * 0.5) + 1) * 0.5;
    if (stemRef.current) {
      stemRef.current.scale.y = 0.5 + growth * 0.5;
    }
    if (leafRef.current) {
      leafRef.current.scale.setScalar(0.3 + growth * 0.4);
      leafRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Stem */}
      <Cylinder ref={stemRef} position={[0, 0.5, 0]} args={[0.02, 0.02, 1, 8]}>
        <meshStandardMaterial color="#228B22" />
      </Cylinder>
      {/* Leaf */}
      <Sphere ref={leafRef} position={[0, 1, 0]} args={[0.3, 8, 8]}>
        <meshStandardMaterial color="#32CD32" />
      </Sphere>
    </group>
  );
};

// Tractor Component
const Tractor = () => {
  const tractorRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (tractorRef.current) {
      tractorRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 2;
      tractorRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group ref={tractorRef} position={[0, 0.3, -1]}>
      {/* Tractor Body */}
      <Box position={[0, 0, 0]} args={[0.8, 0.4, 0.4]}>
        <meshStandardMaterial color="#FF4500" />
      </Box>
      {/* Wheels */}
      <Cylinder position={[-0.3, -0.2, 0.2]} args={[0.15, 0.15, 0.1, 8]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#2F4F4F" />
      </Cylinder>
      <Cylinder position={[0.3, -0.2, 0.2]} args={[0.15, 0.15, 0.1, 8]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#2F4F4F" />
      </Cylinder>
      <Cylinder position={[-0.3, -0.2, -0.2]} args={[0.15, 0.15, 0.1, 8]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#2F4F4F" />
      </Cylinder>
      <Cylinder position={[0.3, -0.2, -0.2]} args={[0.15, 0.15, 0.1, 8]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#2F4F4F" />
      </Cylinder>
    </group>
  );
};

// Main 3D Scene
const AgricultureScene = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Ground */}
      <Plane position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]} args={[8, 8]}>
        <meshStandardMaterial color="#8B4513" />
      </Plane>
      
      {/* Floating Seeds */}
      <FloatingSeed position={[-2, 1, 1]} />
      <FloatingSeed position={[1, 1.5, -1]} />
      <FloatingSeed position={[2, 0.8, 0.5]} />
      
      {/* Growing Plants */}
      <GrowingPlant position={[-1, -0.5, 0]} />
      <GrowingPlant position={[1, -0.5, 1]} />
      <GrowingPlant position={[0, -0.5, -0.5]} />
      
      {/* Tractor */}
      <Tractor />
      
      {/* Controls */}
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
    </>
  );
};

const AgricultureAnimation = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden bg-gradient-to-b from-sky-200 to-green-200">
      <Canvas camera={{ position: [0, 2, 4], fov: 60 }}>
        <AgricultureScene />
      </Canvas>
    </div>
  );
};

export default AgricultureAnimation;
