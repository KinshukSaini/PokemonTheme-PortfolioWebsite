"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import PokedexScreen from "@/components/PokedexScreen";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <div>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection}/>
      <PokedexScreen activeSection={activeSection}/>
    </div>
  );
}
