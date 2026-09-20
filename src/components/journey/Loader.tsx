"use client";

export default function Loader({
  started,
  onStart,
}: {
  started: boolean;
  onStart: () => void;
}) {
  if (started) return null;

  return (
    <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#1e1b4b]/80 p-6 text-center text-white backdrop-blur-md">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">
        {/* Interactive 3D Experience */}
      </p>
      <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
        My Career Journey
      </h2>
      <p className="mt-3 max-w-md text-2xl text-slate-300">
          Mumbai to Michigan, United States. 
          </p>
       <p className="mt-3 max-w-md text-xl text-slate-300">   
       Walk through the places, roles, and ideas that shaped my profession.
      </p>
      <button
        type="button"
        onClick={onStart}
        className="mt-6 rounded-full bg-signal px-8 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        Start →
      </button>
      <p className="mt-4 font-mono text-[11px] text-slate-400">
        Use A/D, ← / → keys, or bottom buttons to walk.
      </p>
    </div>
  );
}