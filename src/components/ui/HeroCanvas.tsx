"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Ring, Torus } from "@react-three/drei";
import * as THREE from "three";

function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.12;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.18;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1.35, 80, 80]}>
        <MeshDistortMaterial
          color="#93c5fd"
          attach="material"
          distort={0.22}
          speed={2.5}
          roughness={0.12}
          metalness={0.08}
          transparent
          opacity={0.82}
        />
      </Sphere>
    </Float>
  );
}

function OrbitRing({ radius, speed, color, opacity }: { radius: number; speed: number; color: string; opacity: number }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * speed;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <Torus args={[radius, 0.018, 8, 80]}>
        <meshStandardMaterial color={color} transparent opacity={opacity} roughness={0.3} />
      </Torus>
    </group>
  );
}

function SmallOrb({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * speed) * 0.15;
      ref.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * speed * 0.7) * 0.1;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.06, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.4} roughness={0.2} />
    </mesh>
  );
}

export default function HeroCanvas() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 4.5], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 6, 4]} intensity={1.2} color="#eff6ff" />
          <pointLight position={[-4, -3, 2]} intensity={0.5} color="#bfdbfe" />
          <pointLight position={[3, 2, -2]} intensity={0.3} color="#dbeafe" />

          <FloatingSphere />
          <OrbitRing radius={2.1} speed={0.22} color="#3b82f6" opacity={0.35} />
          <OrbitRing radius={2.55} speed={-0.14} color="#60a5fa" opacity={0.22} />
          <OrbitRing radius={1.72} speed={0.3} color="#93c5fd" opacity={0.28} />

          <SmallOrb position={[2.1, 0, 0]} color="#2563eb" speed={0.22} />
          <SmallOrb position={[-2.55, 0.3, 0.2]} color="#3b82f6" speed={-0.14} />
          <SmallOrb position={[0, 1.72, 0]} color="#60a5fa" speed={0.3} />
        </Canvas>
      </Suspense>
    </div>
  );
}
