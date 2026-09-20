"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Text } from "@react-three/drei";

// ---------------- LABELS ----------------

type LabelProps = {
  text: string;
  position: [number, number, number];
  color?: string;
  fontSize?: number;
  outlineColor?: string;
  outlineWidth?: number;
};

function BuildingLabel({
  text,
  position,
  color = "#ffffff",
  fontSize = 0.6,
  outlineColor = "#0f172a",
  outlineWidth = 0.04,
}: LabelProps) {
  return (
    <Text
      position={position}
      fontSize={fontSize}
      color={color}
      anchorX="center"
      anchorY="middle"
      outlineWidth={outlineWidth}
      outlineColor={outlineColor}
      fontWeight="bold"
      letterSpacing={0.05}
    >
      {text}
    </Text>
  );
}

// ---------------- BUILDINGS ----------------

export function MumbaiUniversityBuilding() {
  return (
    <group position={[0, 0, -4.5]} scale={0.42}>
      <BuildingLabel text="UNIVERSITY OF MUMBAI" position={[0, 3.5, 1.6]} fontSize={0.5} outlineWidth={0.03} />
      
      <mesh position={[0, 3, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 6, 3]} />
        <meshStandardMaterial color="#b88a44" roughness={0.8} />
      </mesh>
      <mesh position={[0, 7.5, 0]}>
        <coneGeometry args={[1.5, 3, 4]} />
        <meshStandardMaterial color="#785828" roughness={0.9} />
      </mesh>
    </group>
  );
}

export function NsdlBuilding() {
  const floors = 10;
  return (
    <group position={[0, 0, -4.5]} scale={0.42}>
      <BuildingLabel text="Protean e-Governance/ NSDL" position={[0, 2.2, 2.3]} fontSize={0.45} color="#0f172a" outlineColor="#ffffff" outlineWidth={0.02} />
      
      <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[7, 3, 4.5]} />
        <meshStandardMaterial color="#e2e8f0" roughness={0.6} />
      </mesh>
      <mesh position={[0, 8.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[6.2, 11, 3.8]} />
        <meshStandardMaterial color="#0f172a" roughness={0.1} metalness={0.8} />
      </mesh>
      <mesh position={[0, 14.4, 0]}>
        <boxGeometry args={[3, 0.8, 2]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      {Array.from({ length: floors }).map((_, i) => (
        <mesh key={i} position={[0, 3.8 + i * 0.95, 0.1]}>
          <boxGeometry args={[6.3, 0.2, 3.9]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

export function OracleBuilding() {
  return (
    <group position={[0, 0, -4.5]} scale={0.42}>
      <BuildingLabel 
        text="ORACLE" 
        position={[-1.5, 3.5, 1.6]} 
        color="#dc2626" 
        outlineColor="#ffffff" 
        outlineWidth={0.02} 
        fontSize={0.65} 
      />
      
      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[7, 4, 3]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.5} />
      </mesh>
      {Array.from({ length: 6 }).map((_, i) => (
        <group key={i} position={[0, 4.5 + i * 1.1, 1.2]}>
          <mesh rotation={[0.15, 0, 0]}>
            <boxGeometry args={[6.8, 0.9, 0.8]} />
            <meshStandardMaterial color="#0d9488" roughness={0.1} transparent opacity={0.85} />
          </mesh>
          <mesh position={[0, -0.5, 0.1]}>
            <boxGeometry args={[6.9, 0.15, 0.9]} />
            <meshStandardMaterial color="#e2e8f0" />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 7.5, 0]}>
        <torusGeometry args={[3.8, 0.3, 16, 64, Math.PI]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.3} />
      </mesh>
    </group>
  );
}

export function JpmcBuilding() {
  return (
    <group position={[0, 0, -4.5]} scale={0.42}>
      <BuildingLabel text="JPMorgan Chase & Co" position={[0.5, 12.5, 1.0]} fontSize={0.45} />
      
      {[-2.5, -1.5, -0.5, 0.5, 1.5, 2.5].map((x) => (
        <mesh key={x} position={[x, 1.5, 0]} castShadow>
          <cylinderGeometry args={[0.15, 0.15, 3, 8]} />
          <meshStandardMaterial color="#f1f5f9" roughness={0.5} />
        </mesh>
      ))}
      <mesh position={[0, 7.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 9, 3]} />
        <meshStandardMaterial color="#c2410c" roughness={0.7} />
      </mesh>
      <mesh position={[1.2, 9, 1.51]}>
        <boxGeometry args={[2.8, 3.5, 0.1]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.1} metalness={0.8} />
      </mesh>
      <mesh position={[-3.5, 4.5, 1]} castShadow>
        <boxGeometry args={[3, 5, 2]} />
        <meshStandardMaterial color="#b91c1c" roughness={0.7} />
      </mesh>
    </group>
  );
}

export function CmuArchBuilding() {
  return (
    <group position={[0, 0, -3]} scale={0.42}>
      <BuildingLabel text="CENTRAL MICHIGAN UNIVERSITY" position={[0, 9.5, 0]} color="#fcd34d" outlineColor="#78350f" outlineWidth={0.03} fontSize={0.5} />
      
      <group position={[-2.5, 1.5, 0]}>
        <mesh position={[0, 1.5, 0]} castShadow>
          <boxGeometry args={[1, 3, 1]} />
          <meshStandardMaterial color="#991b1b" />
        </mesh>
      </group>
      <group position={[2.5, 1.5, 0]}>
        <mesh position={[0, 1.5, 0]} castShadow>
          <boxGeometry args={[1, 3, 1]} />
          <meshStandardMaterial color="#991b1b" />
        </mesh>
      </group>
      <mesh position={[0, 4.5, 0]}>
        <torusGeometry args={[3.2, 0.3, 8, 32, Math.PI]} />
        <meshStandardMaterial color="#fcd34d" roughness={0.4} metalness={0.4} />
      </mesh>
    </group>
  );
}

export function CmuMainBuilding() {
  return (
    <group position={[0, 0, -4.5]} scale={0.42}>
      <BuildingLabel text="CMU Computer Science Department" position={[0, 4.5, 2.35]} fontSize={0.5} outlineWidth={0.02} />
      
      <mesh position={[0, 2.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[12, 5, 3]} />
        <meshStandardMaterial color="#78350f" roughness={0.9} />
      </mesh>
      <mesh position={[0, 6, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[3, 12, 3.2]} />
        <meshStandardMaterial color="#78350f" roughness={0.9} />
      </mesh>
      <mesh position={[0, 1.5, 1.8]} castShadow>
        <boxGeometry args={[3.2, 3, 1]} />
        <meshStandardMaterial color="#d6d3d1" roughness={0.8} />
      </mesh>
    </group>
  );
}

export function HireMeFlag({ celebrate = false }: { celebrate?: boolean }) {
  const flagRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (celebrate && flagRef.current) {
      flagRef.current.position.y = THREE.MathUtils.lerp(
        flagRef.current.position.y,
        1.5,
        delta * 2.5
      );
    }
  });

  return (
    <group position={[0, 0, -2]} scale={0.8}>
      <BuildingLabel text="HIRE ME!" position={[0, 8.5, 0]} fontSize={1.2} color="#10b981" outlineColor="#064e3b" outlineWidth={0.08} />
      
      <mesh position={[0, 0.2, 0]} castShadow>
        <cylinderGeometry args={[0.8, 1, 0.4, 16]} />
        <meshStandardMaterial color="#334155" />
      </mesh>
      <mesh position={[0, 3.5, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 7, 8]} />
        <meshStandardMaterial color="#d1d5db" metalness={0.8} />
      </mesh>
      <mesh ref={flagRef} position={[0.7, 6, 0]} castShadow>
        <boxGeometry args={[1.4, 1, 0.05]} />
        <meshStandardMaterial color="#10b981" />
      </mesh>
      <mesh position={[0, 7.2, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#f59e0b" metalness={0.9} />
      </mesh>
    </group>
  );
}

// ---------------- OBSTACLES ----------------

export function RoadClosedBarricade() {
  return (
    <group rotation={[0, 0, 0]}>
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[2.5, 0.4, 0.1]} />
        <meshStandardMaterial color="#f97316" />
      </mesh>
      <mesh position={[0, 0.7, 0.06]}>
        <planeGeometry args={[2.4, 0.3]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[-1, 0.35, 0]}>
        <boxGeometry args={[0.1, 0.7, 0.1]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>
      <mesh position={[1, 0.35, 0]}>
        <boxGeometry args={[0.1, 0.7, 0.1]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>
      <mesh position={[-1, 1, 0]}>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[1, 1, 0]}>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

export function WaterPuddle() {
  return (
    <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[1.2, 16]} />
      <meshStandardMaterial color="#0284c7" roughness={0.1} transparent opacity={0.8} />
    </mesh>
  );
}

export function Manhole() {
  return (
    <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[0.7, 16]} />
      <meshStandardMaterial color="#334155" roughness={0.9} metalness={0.2} />
    </mesh>
  );
}

export function TrafficInspector() {
  return (
    <group position={[0, 0, 0]}>
      <mesh position={[-0.15, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.06, 0.8]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>
      <mesh position={[0.15, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.06, 0.8]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>
      <mesh position={[0, 1.1, 0]} castShadow>
        <boxGeometry args={[0.5, 0.6, 0.25]} />
        <meshStandardMaterial color="#f3f4f6" />
      </mesh>
      <mesh position={[0, 1.55, 0]} castShadow>
        <sphereGeometry args={[0.15]} />
        <meshStandardMaterial color="#fcd5b5" />
      </mesh>
      <mesh position={[0, 1.7, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.16, 0.1]} />
        <meshStandardMaterial color="#1e3a8a" />
      </mesh>
      <mesh position={[-0.1, 1.68, 0]} rotation={[0, 0, 0.2]} castShadow>
        <boxGeometry args={[0.2, 0.02, 0.16]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      <mesh position={[0.3, 1.1, 0]} rotation={[0, 0, 0.2]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 0.5]} />
        <meshStandardMaterial color="#f3f4f6" />
      </mesh>
      <group position={[-0.25, 1.25, 0]} rotation={[0, 0, Math.PI / 2]}>
        <mesh position={[0, 0.25, 0]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 0.5]} />
          <meshStandardMaterial color="#f3f4f6" />
        </mesh>
        <mesh position={[0, 0.6, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.05, 8]} />
          <meshStandardMaterial color="#dc2626" />
        </mesh>
        <Text position={[0, 0.6, -0.03]} rotation={[0, Math.PI, 0]} fontSize={0.12} color="#ffffff" fontWeight="bold">
          STOP
        </Text>
      </group>
    </group>
  );
}

// ---------------- VEGETATION ----------------

export function Vegetation({ x }: { x: number }) {
  const isIndia = x < 160;
  if (isIndia) {
    return (
      <group position={[x, 0, -2.5 + Math.sin(x) * 1.5]}>
        <mesh position={[0, 1.5, 0]}><cylinderGeometry args={[0.1, 0.16, 3]} /><meshStandardMaterial color="#784b28" /></mesh>
        <mesh position={[0, 3.2, 0]}><sphereGeometry args={[1.1, 7, 7]} /><meshStandardMaterial color="#2e7d32" /></mesh>
      </group>
    );
  }
  return (
    <group position={[x, 0, -2.5 + Math.cos(x) * 1.5]}>
      <mesh position={[0, 0.6, 0]}><cylinderGeometry args={[0.12, 0.18, 1.2]} /><meshStandardMaterial color="#4a2e18" /></mesh>
      <mesh position={[0, 2.2, 0]}><coneGeometry args={[1.1, 2.4, 6]} /><meshStandardMaterial color="#1b4d3e" /></mesh>
      <mesh position={[0, 3.3, 0]}><coneGeometry args={[0.8, 1.8, 6]} /><meshStandardMaterial color="#2d6a4f" /></mesh>
    </group>
  );
}