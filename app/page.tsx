"use client";

import Contents from "@/components/Landing/Contents";
import Feature from "@/components/Landing/Feature";
import Filler from "@/components/Landing/Filler";
import Hero from "@/components/Landing/Hero";
import Subscribe from "@/components/Landing/Subscribe";
import Faq from "@/components/Landing/Faq"
import { useState, useEffect } from "react";
import { ChevronRight, Globe, Speaker, ArrowRight, BookOpen, Clock, TrendingUp } from "react-feather"
import HowItWorks from "@/components/Landing/HowItWorks";

export default function App() {


  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">

      <Hero />
      <Contents />
      {/* <Feature />  */}
      <HowItWorks/>
      <Subscribe />
      <Faq/>

      

    </main>
  );
}
