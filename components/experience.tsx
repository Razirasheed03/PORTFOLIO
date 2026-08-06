"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseIcon } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      className="max-w-3xl mx-auto space-y-6"
    >
      <h2 className="text-3xl font-bold text-center">Experience</h2>

      <Card className="bg-card/50 backdrop-blur-sm border-muted">
       <CardHeader className="flex flex-row items-center gap-4">
  <div className="bg-primary/10 p-3 rounded-full">
    <BriefcaseIcon className="h-6 w-6 text-primary" />
  </div>
  <div>
    <CardTitle>Full Stack Developer</CardTitle>
    <p className="text-sm text-muted-foreground">
      ThinQ Technologies (Freelance) • Client: Moestay • Dec 2025 – Present
    </p>
  </div>
</CardHeader>

<CardContent>
  <ul className="space-y-2 text-muted-foreground">
    <li>
      • Started as a Frontend Developer and later transitioned into a Full Stack role, contributing across both frontend and backend development
    </li>
    <li>
      • Developed scalable frontend interfaces using <strong>Next.js</strong> and <strong>TypeScript</strong> for an Airbnb-style property booking platform
    </li>
    <li>
      • Integrated REST APIs using <strong>RTK Query</strong> with optimized caching, state synchronization, and efficient data fetching
    </li>
    <li>
      • Engineered backend features within a <strong>NestJS NX Monorepo</strong>, contributing to production-ready business workflows
    </li>
    <li>
      • Built reusable UI components, role-based workflows, and property onboarding features following modular architecture
    </li>
    <li>
      • Implemented secure JWT authentication flows and collaborated on scalable API-driven business logic
    </li>
    <li>
      • Worked across property onboarding, booking lifecycle, and admin modules while maintaining clean, maintainable code
    </li>
    <li>
      • Collaborated with cross-functional teams to deliver production-ready full-stack features in an agile development environment
    </li>
  </ul>
</CardContent>
      </Card>
    </motion.div>
  );
}
