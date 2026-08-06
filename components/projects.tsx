"use client";

import { useEffect, useRef } from "react";
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
  SiPostgresql,
  SiTypescript,
  SiSocketdotio,
  SiVercel,
  SiRazorpay,
  SiJavascript,
  SiRender,
  SiRedux,
  SiExpress,
  SiNginx,
  SiCloudinary,
  SiGithub,
  SiTailwindcss,
  SiBootstrap,
  SiPostman,
  SiFigma,
  SiNextdotjs,
  SiSwagger,
  SiNetlify,
  SiJsonwebtokens,
  SiRedis,
  SiMongoose,
  SiReactquery,
  SiVite,
  SiZod,
  SiNestjs,
} from "react-icons/si";
import { FaAws, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Moestay Property Booking Platform",
    description:
      "Contributed as a Full Stack Developer to an Airbnb-style property booking platform, engineering scalable frontend modules with Next.js and backend services within a NestJS NX monorepo. Designed reusable, role-driven UI components and integrated REST APIs via RTK Query for optimized caching and state synchronization. Delivered property onboarding, booking workflows, and production-grade business logic following modular architecture, API-first development, and clean code practices across the full stack.",
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "RTK Query",
      "Redux Toolkit",
      "Tailwind CSS",
      "JWT",
      "NX Monorepo",
      "REST APIs",
    ],
    duration: "Client: Moestay via ThinQ Technologies",
    links: null,
  },
  {
    title: "TailMate | Scalable Pet Care & Veterinary Platform",
    description:
      "Industry-grade pet care platform supporting pet adoption, selling, and matchmaking, with real-time veterinary video/audio consultations via WebRTC. Implemented Redis for OTP/session caching, Stripe for secure payments, and Socket.IO for live chat and notifications. Built on a layered controller-service-repository architecture following SOLID and OOP principles, featuring role-based access control, admin analytics, vet earnings management, and Cloudinary-backed media handling.",
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
      "Cloudinary",
      "JWT",
    ],
    links: {
      github: "https://github.com/Razirasheed03/Tailmate",
      live: "https://tailmate-care.vercel.app",
    },
  },
  {
    title: "MediSync | EMR & Appointment Management System",
    description:
      "Enterprise-grade Electronic Medical Records and appointment management system for clinics, supporting Super Admin, Doctor, and Receptionist roles with JWT access/refresh authentication. Features dynamic slot generation with overlap-safe concurrent booking enforced at the database level, full appointment lifecycle management, audit logging, and real-time updates via Socket.IO. Built on a layered Express architecture with Zod validation and a feature-based React SPA using TanStack Query for server state.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "TanStack Query",
      "Zod",
      "JWT",
      "Vercel",
    ],
    links: {
      github: "https://github.com/Razirasheed03/medisync",
      live: "https://medisync-emr.vercel.app/",
    },
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
    else controls.start("hidden");
  }, [isInView, controls]);

  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "React":
        return <SiReact className="text-blue-400" />;
      case "Redux Toolkit":
      case "RTK Query":
        return <SiRedux className="text-purple-500" />;
      case "Node.js":
        return <SiNodedotjs className="text-green-600" />;
      case "Express.js":
        return <SiExpress className="text-gray-400" />;
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
      case "PostgreSQL":
        return <SiPostgresql className="text-blue-600" />;
      case "TypeScript":
        return <SiTypescript className="text-blue-600" />;
      case "Socket.IO":
        return <SiSocketdotio className="text-foreground" />;
      case "AWS":
      case "AWS EC2":
        return <FaAws className="text-orange-500" />;
      case "Vercel":
        return <SiVercel className="text-foreground" />;
      case "Razorpay":
        return <SiRazorpay className="text-blue-500" />;
      case "JWT":
        return <SiJsonwebtokens className="text-black-400" />;
      case "Next.js":
        return <SiNextdotjs className="text-black-600" />;
      case "Render":
        return <SiRender className="text-green-500" />;
      case "Nginx":
        return <SiNginx className="text-green-500" />;
      case "Cloudinary":
        return <SiCloudinary className="text-blue-400" />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-cyan-500" />;
      case "Bootstrap":
        return <SiBootstrap className="text-purple-500" />;
      case "Postman":
        return <SiPostman className="text-orange-600" />;
      case "Figma":
        return <SiFigma className="text-pink-500" />;
      case "Nodemailer":
      case "NodeCache":
      case "Helmet.js":
      case "Winston":
        return <SiNodedotjs className="text-green-600" />;
      case "Multer":
      case "Axios":
        return <SiJavascript className="text-yellow-400" />;
      case "MVC":
      case "EJS":
      case "Session":
        return <SiJavascript className="text-yellow-400" />;
      case "Swagger":
      case "REST APIs":
        return <SiSwagger className="text-white-400" />;
      case "Netlify":
        return <SiNetlify className="text-green-400" />;
      case "Github":
        return <SiGithub className="text-white-400" />;
        case "Redis":
          return <SiRedis className="text-white-400"/>
            case "NestJS":
                  return <SiNestjs className="text-red-500"/>;
      default:
        return <SiReact className="text-blue-400" />;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
      }}
      className="max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div>
                  <CardTitle>{project.title}</CardTitle>
                  {project.duration && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.duration}
                    </p>
                  )}
                </div>
              </CardHeader>
              <CardContent
                className={`flex-grow ${
                  project.title === "Moestay Property Booking Platform"
                    ? "-mt-3"
                    : ""
                }`}
              >
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center space-x-1 text-xs bg-muted px-2 py-1 rounded"
                    >
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
                <div className="w-full space-y-2">
  {project.links ? (
    <div className="flex flex-col gap-2 w-full">
      {project.links.github && (
        <Button
          variant="secondary"
          className="w-full gap-2"
          asChild
        >
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="h-4 w-4" />
            Source Code
          </a>
        </Button>
      )}

      {project.links.live && (
        <Button className="w-full gap-2" asChild>
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="h-4 w-4" />
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
      🔒 Confidential - Contact for Demo
    </Button>
  )}
</div>

              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
