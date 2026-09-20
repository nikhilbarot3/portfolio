"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import type { PerspectiveCamera } from "three";
import Loader from "./journey/Loader";
import StopCard from "./journey/StopCard";
import World from "./journey/World";
import { getTargetX, installKeyboardInput, nudge, press, release, consumeJump, triggerJump } from "./journey/input";
import { stops } from "./journey/stops";

function FitCamera() {
  const { camera, size } = useThree();
  const perspectiveCamera = camera as PerspectiveCamera;

  useFrame(() => {
    const portrait = size.width / size.height < 1;
    perspectiveCamera.fov = portrait ? 60 : 45; 
    perspectiveCamera.position.set(0, 3.5, portrait ? 13 : 9);
    perspectiveCamera.lookAt(0, 1.8, 0);
    perspectiveCamera.updateProjectionMatrix();
  });

  return null;
}

export default function JourneyWorld() {
  const [x, setX] = useState(0);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [jumpActive, setJumpActive] = useState(false);
  const [celebrate, setCelebrate] = useState(false); // New state for victory screen

  useEffect(() => {
    const cleanup = installKeyboardInput();
    const timer = setInterval(() => {
      setX(getTargetX());
      if (consumeJump()) {
        setJumpActive(true);
        setTimeout(() => setJumpActive(false), 600);
      }
    }, 16);
    return () => { cleanup(); clearInterval(timer); };
  }, []);

  const currentStop = stops.find((stop) => Math.abs(stop.x - x) <= 6) ?? null;
  const isUsa = x >= 170;
  
  const skyColor = isUsa
    ? "bg-[linear-gradient(180deg,#0284c7_0%,#bae6fd_100%)]"
    : "bg-[linear-gradient(180deg,#6366f1_0%,#fdba74_100%)]";

  return (
    <section
      className={`relative h-[calc(100svh-72px)] min-h-[480px] w-full overflow-hidden transition-colors duration-1000 ${skyColor}`}
      onTouchStart={(e) => setTouchStart(e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchStart === null) return;
        const diff = (e.changedTouches[0]?.clientX ?? touchStart) - touchStart;
        if (Math.abs(diff) > 20) nudge(diff > 0 ? "left" : "right", 4);
        setTouchStart(null);
      }}
    >
      <Canvas camera={{ position: [0, 3, 11], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={isUsa ? 2.0 : 2.4} />
        <directionalLight position={[6, 12, 4]} intensity={2.8} color={isUsa ? "#e0f2fe" : "#ffedd5"} />
        <FitCamera />
        <Suspense fallback={null}>
          <World 
            x={x} 
            jumpActive={jumpActive} 
            onScore={(pts) => setScore((s) => s + pts)} 
            onCelebrate={() => setCelebrate(true)} 
          />
        </Suspense>
      </Canvas>

      <Loader started={started} onStart={() => setStarted(true)} />

      {/* VICTORY OVERLAY */}
      {celebrate && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#0f172a]/70 backdrop-blur-sm transition-opacity duration-1000 p-6 text-center">
          <h1 className="animate-bounce font-display text-5xl font-extrabold text-white drop-shadow-[0_0_25px_rgba(16,185,129,1)] sm:text-7xl">
            JOURNEY COMPLETE!
          </h1>
          <p className="mt-6 max-w-xl font-mono text-lg text-emerald-300">
            You've navigated the timeline perfectly. Final Score: <strong>{score}</strong>
          </p>
          <p className="mt-2 max-w-xl text-sm text-slate-200">
            10 years of  enterprise software engineering experience and cutting-edge applied AI research, I'm ready to build the future.
          </p>
          <a
            href="/hire-me"
            className="mt-8 animate-pulse rounded-full bg-emerald-500 px-10 py-4 font-mono text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_40px_rgba(16,185,129,0.6)] transition-transform hover:scale-110 hover:bg-emerald-400"
          >
            Hire Nikhil Barot →
          </a>
        </div>
      )}

      {/* Standard HUD (Hidden when celebrating) */}
      {!celebrate && (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-6 flex justify-between px-6">
            <div className="text-center sm:text-left">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/90 drop-shadow">
                {isUsa ? "Michigan, United States" : "Mumbai, India"}
              </p>
              <h2 className="font-display text-xl font-bold text-white drop-shadow-md sm:text-2xl">
                {currentStop ? currentStop.title : "On the road..."}
              </h2>
            </div>
            <div className="rounded-xl bg-[#1e1b4b]/80 px-4 py-2 text-right backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-300">Score</p>
              <p className="font-mono text-xl font-bold text-white">{score}</p>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-24 z-10 flex justify-center px-4 sm:bottom-auto sm:left-8 sm:top-24 sm:justify-start sm:px-0">
            <StopCard stop={currentStop} />
          </div>

          <div className="absolute bottom-16 right-6 z-20 flex gap-2 sm:bottom-6">
            <button
              type="button"
              onClick={triggerJump}
              className="mr-2 rounded-full bg-emerald-500 px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest text-white shadow-xl active:scale-95 sm:mr-4"
            >
              Jump
            </button>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full bg-signal text-xl font-bold text-white shadow-xl active:scale-90 sm:h-14 sm:w-14 sm:text-2xl"
              onPointerDown={() => press("left")}
              onPointerUp={() => release("left")}
              onPointerLeave={() => release("left")}
            >
              ←
            </button>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full bg-signal text-xl font-bold text-white shadow-xl active:scale-90 sm:h-14 sm:w-14 sm:text-2xl"
              onPointerDown={() => press("right")}
              onPointerUp={() => release("right")}
              onPointerLeave={() => release("right")}
            >
              →
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between border-t border-white/20 bg-[#1e1b4b]/80 px-6 py-3 font-mono text-[10px] uppercase tracking-wider text-slate-300 backdrop-blur-md">
            <span>Stop: {currentStop ? stops.indexOf(currentStop) + 1 : "-"} / {stops.length}</span>
            <span className="hidden sm:inline">Use Arrow keys to drive, Space to jump hurdles</span>
            <span>Distance: {Math.round(x)} / 280m</span>
          </div>
        </>
      )}
    </section>
  );
}