"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type CharacterProps = {
  moving: boolean;
  direction: "left" | "right";
  jumpActive: boolean;
};

export default function Character({ moving, direction, jumpActive }: CharacterProps) {
  const rootGroup = useRef<THREE.Group>(null);
  const scooterGroup = useRef<THREE.Group>(null);
  const frontWheel = useRef<THREE.Group>(null);
  const rearWheel = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (rootGroup.current) {
      rootGroup.current.rotation.y = THREE.MathUtils.lerp(
        rootGroup.current.rotation.y,
        direction === "right" ? 0 : Math.PI,
        0.14
      );
    }

    if (scooterGroup.current) {
      const roadBounce = moving && !jumpActive ? Math.sin(t * 32) * 0.015 : 0;
      
      // If jumpActive is true, arc upward
      const targetY = jumpActive ? 1.5 : roadBounce;
      scooterGroup.current.position.y = THREE.MathUtils.lerp(scooterGroup.current.position.y, targetY, 0.2);
      
      scooterGroup.current.rotation.z = THREE.MathUtils.lerp(
        scooterGroup.current.rotation.z,
        jumpActive ? 0.2 : (moving ? -0.03 : 0),
        0.1
      );
    }

    const spinSpeed = moving ? delta * 16 : 0;
    if (frontWheel.current) frontWheel.current.rotation.z -= spinSpeed;
    if (rearWheel.current) rearWheel.current.rotation.z -= spinSpeed;
  });

  return (
    <group ref={rootGroup} position={[0, 0, 0]}>
      <group ref={scooterGroup}>
        <group ref={frontWheel} position={[0.92, 0.38, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow><cylinderGeometry args={[0.38, 0.38, 0.16, 24]} /><meshStandardMaterial color="#1e2229" /></mesh>
        </group>
        <group ref={rearWheel} position={[-0.92, 0.38, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]} castShadow><cylinderGeometry args={[0.38, 0.38, 0.16, 24]} /><meshStandardMaterial color="#1e2229" /></mesh>
        </group>
        
        {/* Scooter Body */}
        <group position={[0.02, 0.36, 0]}>
          <mesh castShadow><boxGeometry args={[1.05, 0.1, 0.58]} /><meshStandardMaterial color="#f59e0b" /></mesh>
        </group>
        <group position={[0.62, 0.88, 0]} rotation={[0, 0, -0.26]}>
          <mesh castShadow><boxGeometry args={[0.1, 0.95, 0.68]} /><meshStandardMaterial color="#f59e0b" /></mesh>
        </group>
        <group position={[-0.68, 0.62, 0]}>
          <mesh castShadow><boxGeometry args={[0.8, 0.48, 0.44]} /><meshStandardMaterial color="#f59e0b" /></mesh>
        </group>
        <mesh position={[-0.35, 0.95, 0]} castShadow><boxGeometry args={[0.78, 0.16, 0.38]} /><meshStandardMaterial color="#1f242d" /></mesh>
        
        {/* Rider Block */}
        <group position={[-0.28, 1.05, 0]}>
          <mesh position={[0, 0.12, 0]} castShadow><boxGeometry args={[0.34, 0.22, 0.32]} /><meshStandardMaterial color="#1e40af" /></mesh>
          <group position={[0.05, 0.28, 0]} rotation={[0, 0, -0.34]}>
            <mesh position={[0, 0.26, 0]} castShadow><cylinderGeometry args={[0.18, 0.16, 0.54, 16]} /><meshStandardMaterial color="#3d2214" /></mesh>
            <mesh position={[0.06, 0.72, 0]} castShadow><sphereGeometry args={[0.22, 20, 20]} /><meshStandardMaterial color="#f59e0b" /></mesh>
          </group>
        </group>
      </group>
    </group>
  );
}