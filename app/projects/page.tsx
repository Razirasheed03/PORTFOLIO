"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/navbar";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiStripe,
  SiSocketdotio,
  SiVercel,
  SiRazorpay,
  SiJavascript,
  SiRender,
  SiRedux,
  SiExpress,
  SiGithub,
  SiTailwindcss,
  SiCloudinary,
  SiFirebase,
  SiRedis,
  SiJsonwebtokens,
  SiNextdotjs,
  SiMongoose,
  SiReactquery,
  SiVite,
  SiZod,
  SiNestjs,
} from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

/* =======================
   ALL PROJECTS (6 TOTAL)
======================= */

const projects = [
  // ---- Main 3 (same as home) ----
  {
    title: "Moestay Property Booking Platform",
    description:
      "Contributed as a Full Stack Developer to an Airbnb-style property booking platform, engineering scalable frontend modules with Next.js and backend features within a NestJS NX monorepo. Designed reusable, role-driven workflows and integrated REST APIs using RTK Query for optimized caching and state synchronization. Worked on property onboarding, booking workflows, and production-grade business logic while following modular architecture, API-first development, and maintainable code practices.",
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "REST APIs",
      "RTK Query",
      "Redux Toolkit",
      "Tailwind CSS",
      "JWT",
      "NX Monorepo",
    ],
    duration: "Client: Moestay via ThinQ Technologies",
    links: null,
  },

  {
    title: "TailMate | Scalable Pet Care & Veterinary Platform",
    description:
      "Industry-grade pet care platform enabling pet adoption, selling, and intelligent matchmaking (breeding), along with real-time veterinary video/audio consultations using WebRTC. Implemented Redis for OTP/session caching and performance optimization, Stripe for secure payment handling, and Socket.IO for real-time chat and notifications. Built with clean RESTful API mapping, SOLID principles, OOP-driven design, and layered architecture (controller-service-repository). Features role-based access control, admin analytics, vet earnings management, and scalable cloud deployment on Render and Vercel.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "WebRTC",
      "Stripe",
      "Tailwind CSS",
      "Cloudinary",
      "JWT",
      "Render",
      "Vercel",
    ],
    links: {
      github: "https://github.com/Razirasheed03/Tailmate",
      live: "https://tailmate-care.vercel.app",
    },
  },

  {
    title: "MediSync | EMR & Appointment Management System",
    description:
      "Enterprise-grade Electronic Medical Records and appointment management platform supporting Super Admin, Doctor, and Receptionist roles. Engineered secure JWT authentication, RBAC, dynamic doctor scheduling, and conflict-free appointment booking with database-level validation. Implemented Socket.IO-powered real-time updates, Zod request validation, layered architecture, and scalable REST APIs with feature-based frontend architecture using TanStack Query.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "TanStack Query",
      "Socket.IO",
      "JWT",
      "Zod",
      "Vite",
    ],
    links: {
      github: "https://github.com/Razirasheed03/medisync",
      live: "https://medisync-emr.vercel.app/",
    },
  },

  // ---- Extra 3 (View more) ----
  {
    title: "CreditFlow | AI Financial Audit Platform",
    description:
      "Engineered an AI-powered financial audit platform enabling businesses to upload financial documents and generate intelligent audit reports. Implemented secure authentication, role-based access control, structured audit workflows, and Supabase-backed data management. Designed scalable data models, AI-assisted report generation, and modern full-stack architecture focused on performance, maintainability, and production-ready workflows.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "JWT",
      "AI",
    ],
    links: {
      github: "https://github.com/Razirasheed03/creditflow",
      live: "https://creditflow-audit.vercel.app",
    },
  },
  {
    title: "VoteStream | Live Polling Platform",
    description:
      "Built a real-time polling platform enabling live audience participation with low-latency vote synchronization using Socket.IO. Engineered dynamic poll creation, Firebase authentication, role-based poll management, and instant result broadcasting while ensuring data consistency across concurrent users through optimized real-time communication.",
    technologies: [
      "Next.js",
      "Socket.IO",
      "Node.js",
      "MongoDB",
      "JWT",
      "Firebase",
    ],
    links: {
      github: "https://github.com/Razirasheed03/votestream",
      live: "https://votestream.in",
    },
  },
  {
    title: "ServiceLink | Subscription-Based Service Platform",
    description:
      "Engineered a SaaS-based service marketplace where customers discover and book services while providers subscribe through recurring Stripe billing to access the platform. Implemented subscription lifecycle management, automated plan expiry, secure authentication, RBAC, and scalable REST APIs following modular backend architecture. Collaborated within a Git-based team workflow to deliver production-ready business features.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redux Toolkit",
      "Stripe",
      "Socket.IO",
      "JWT",
    ],
    links: {
      github: "https://github.com/Razirasheed03/servicelink-platform",
    },
  },

  {
    title: "CaseVerse | E-commerce Platform",
    description:
      "Built a production-ready e-commerce platform featuring secure JWT authentication, product catalog management, shopping cart, order lifecycle handling, and Razorpay payment integration. Engineered scalable REST APIs, role-based admin operations, inventory management, and analytics dashboards following modular backend architecture and maintainable business logic.",
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "JWT",
    ],
    links: {
      github: "https://github.com/Razirasheed03/CaseVerse",
    },
  },
];

export default function AllProjectsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "React":
        return <SiReact className="text-blue-400" />;
      case "Next.js":
        return <SiNextdotjs />;
      case "Node.js":
        return <SiNodedotjs className="text-green-600" />;
      case "MongoDB":
        return <SiMongodb className="text-green-500" />;
      case "Mongoose":
        return <SiMongoose className="text-red-500" />;
      case "TanStack Query":
        return <SiReactquery className="text-red-400" />;
      case "Zod":
        return <SiZod className="text-blue-600" />;
      case "Vite":
        return <SiVite className="text-purple-500" />;
      case "Redux Toolkit":
      case "RTK Query":
        return <SiRedux className="text-purple-500" />;
      case "Socket.IO":
        return <SiSocketdotio />;
      case "JWT":
        return <SiJsonwebtokens />;
      case "Stripe":
        return <SiStripe className="text-blue-500" />;
      case "Razorpay":
        return <SiRazorpay className="text-blue-500" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-cyan-500" />;
      case "Redis":
        return <SiRedis />;
      case "Firebase":
        return <SiFirebase className="text-yellow-500"/>;
      case "Express.js":
        return <SiExpress />;
      case "Render":
        return <SiRender />;
      case "Vercel":
        return <SiVercel />;
      case "TypeScript":
        return <SiTypescript className="text-blue-500"/>;
         case "NestJS":
        return <SiNestjs className="text-red-500"/>;
      default:
        return <SiJavascript className="text-yellow-500"/>;
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-24">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8 } },
          }}
          className="max-w-6xl mx-auto px-4"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">
            All Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-muted hover:border-primary/50 hover:shadow-lg transition">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    {project.duration && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.duration}
                      </p>
                    )}
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground ">
                      {project.description}
                    </p>
                  </CardContent>

                  <CardFooter className="flex flex-col items-start space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded"
                        >
                          {getTechIcon(tech)}
                          <span>{tech}</span>
                        </div>
                      ))}
                    </div>

                {project.links ? (
  <div className="w-full flex flex-col gap-2">
    {project.links.github && (
      <Button variant="secondary" asChild>
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className="mr-2" />
          Source Code
        </a>
      </Button>
    )}

    {project.links.live && (
      <Button asChild>
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt className="mr-2" />
          Live
        </a>
      </Button>
    )}
  </div>
) : (
  <Button
    variant="ghost"
    className="w-full text-muted-foreground hover:text-primary"
    onClick={() =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" })
    }
  >
    🔒 Confidential – Contact for Demo
  </Button>
)}

                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
