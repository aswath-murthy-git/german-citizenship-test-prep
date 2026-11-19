"use client";

import React from "react";
import { CitizenshipSection } from "@/components/CitizenshipSection";
import { useUser } from "@/context/UserContext";

export default function Home() {
  const { profile } = useUser();

  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100">
      <CitizenshipSection />
    </main>
  );
}
