"use client";

import dynamic from "next/dynamic";
import { authorProfile } from "@/lib/data";

const JourneyWorld = dynamic(() => import("@/components/JourneyWorld"), { ssr: false });

export default function IEEEAuthorPage() {
  return (
    <div className="min-h-[calc(100svh-72px)]">
      {/* <SectionTag>IEEE author</SectionTag> */}
      <div className="sr-only">
        <h1>My Journey</h1>
        <p>{authorProfile.focus}</p>
      </div>
      <JourneyWorld />

    </div>
  );
}