"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import {
  CmuArchBuilding,
  CmuMainBuilding,
  HireMeFlag,
  JpmcBuilding,
  Manhole,
  MumbaiUniversityBuilding,
  NsdlBuilding,
  OracleBuilding,
  RoadClosedBarricade,
  TrafficInspector,
  Vegetation,
  WaterPuddle,
} from "./Buildings";
import Character from "./Character";
import { setBlockX } from "./input";
import { stops } from "./stops";

export default function World({
  x,
  jumpActive,
  onScore,
  onCelebrate,
}: {
  x: number;
  jumpActive: boolean;
  onScore: (points: number) => void;
  onCelebrate: () => void;
}) {
  const worldGroup = useRef<THREE.Group>(null);
  const characterX = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);

  const [hasCelebrated, setHasCelebrated] = useState(false);

  const [hurdles, setHurdles] = useState(
    stops.slice(1).map((stop, i) => {
      const types = ["barricade", "inspector", "puddle", "manhole"];
      return {
        id: stop.id,
        x: stop.x - 8,
        cleared: false,
        type: types[i % types.length],
      };
    })
  );

  const trees = useMemo(() => {
    return Array.from({ length: 70 })
      .map((_, i) => ({ id: i, x: i * 4.5 }))
      .filter((tree) => {
        return !stops.some((stop) => Math.abs(tree.x - stop.x) < 7);
      });
  }, []);

  useFrame((state, delta) => {
    characterX.current = THREE.MathUtils.damp(characterX.current, x, 6, delta);
    velocity.current = characterX.current - lastX.current;
    lastX.current = characterX.current;

    if (worldGroup.current) {
      worldGroup.current.position.x = -characterX.current;
    }

    // Trigger Celebration when reaching the final stop (x = 260)
    if (characterX.current >= 259 && !hasCelebrated) {
      setHasCelebrated(true);
      onCelebrate();
    }

    // Blocking & Scoring Logic
    let currentBlock: number | null = null;

    hurdles.forEach((hurdle, i) => {
      if (!hurdle.cleared && !hasCelebrated) {
        if (characterX.current >= hurdle.x - 1.5 && characterX.current < hurdle.x + 1) {
          if (jumpActive) {
            setHurdles((prev) => {
              const next = [...prev];
              next[i].cleared = true;
              return next;
            });
            onScore(100);
          } else {
            currentBlock = hurdle.x - 1.5;
          }
        }
      }
    });

    setBlockX(currentBlock);
  });

  const isMoving = Math.abs(velocity.current) > 0.004;
  const direction = velocity.current >= -0.001 ? "right" : "left";

  return (
    <group>
      <group position={[0, 0, 0]}>
        <Character moving={isMoving} direction={direction} jumpActive={jumpActive} />
      </group>

      <group ref={worldGroup}>
        <mesh position={[140, -0.6, 0]} receiveShadow>
          <boxGeometry args={[320, 1.2, 16]} />
          <meshStandardMaterial color="#e5ded0" roughness={0.9} />
        </mesh>
        <mesh position={[140, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[320, 2.5]} />
          <meshStandardMaterial color="#94a3b8" roughness={0.8} />
        </mesh>

        {stops.map((stop) => (
          <group key={stop.id} position={[stop.x, 0, 0]}>
            {stop.buildingType === "mu" && <MumbaiUniversityBuilding />}
            {stop.buildingType === "nsdl" && <NsdlBuilding />}
            {stop.buildingType === "oracle" && <OracleBuilding />}
            {stop.buildingType === "jpmc" && <JpmcBuilding />}
            {stop.buildingType === "cmu-arch" && <CmuArchBuilding />}
            {stop.buildingType === "cmu-main" && <CmuMainBuilding />}
            {stop.buildingType === "hire-me" && <HireMeFlag celebrate={hasCelebrated} />}
            <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[1.2, 1.4, 32]} />
              <meshBasicMaterial color="#0f766e" />
            </mesh>
          </group>
        ))}

        {hurdles.map((h) => (
          <group key={h.id} position={[h.x, 0, 0]}>
            {h.type === "barricade" && (
              <group rotation={[h.cleared ? Math.PI / 2 : 0, 0, 0]}><RoadClosedBarricade /></group>
            )}
            {h.type === "inspector" && (
              <group rotation={[h.cleared ? Math.PI / 2 : 0, 0, 0]}><TrafficInspector /></group>
            )}
            {h.type === "puddle" && <WaterPuddle />}
            {h.type === "manhole" && <Manhole />}
          </group>
        ))}

        {trees.map((tree) => (
          <Vegetation key={tree.id} x={tree.x} />
        ))}
      </group>
    </group>
  );
}