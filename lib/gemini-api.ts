import { GoogleGenerativeAI } from "@google/generative-ai";

const PERSONAL_INFO = `
Name: Muhammed Razi P P

Role:
Full Stack Developer

Experience:
2+ years of hands-on experience building scalable web applications. Currently working as a Freelance Full Stack Developer with ThinQ Technologies, contributing to both frontend and backend development for production applications.

Contact:
+91 6235009441
razirasheed03@gmail.com

LinkedIn:
linkedin.com/in/razirasheed

GitHub:
github.com/Razirasheed03

Professional Summary:
Full Stack Developer specializing in React, Next.js, Node.js, Express.js, TypeScript, and MongoDB. Experienced in designing scalable REST APIs, implementing JWT authentication, role-based access control, real-time applications, and modern full-stack architectures. Passionate about clean code, software architecture, performance optimization, and building production-ready applications.

Technical Skills:

Frontend:
React.js, Next.js, TypeScript, Redux Toolkit, RTK Query, HTML, CSS, Tailwind CSS

Backend:
Node.js, Express.js, JavaScript, TypeScript

Database:
MongoDB, Firebase, Supabase, Redis

Integrations:
Stripe, Razorpay, Socket.IO, WebRTC, Mapbox API, Cloudinary

DevOps:
Docker, Jenkins, Nginx, AWS (EC2, S3), Render, Vercel

Tools:
Git, GitHub, Postman, Swagger, Figma

Projects:

1. TailMate | Scalable Pet Care & Veterinary Platform
- Industry-grade pet care ecosystem supporting adoption, marketplace listings, matchmaking, and veterinary consultations.
- Implemented Redis for OTP/session caching and performance optimization.
- Integrated WebRTC for audio/video consultations.
- Built real-time chat and notifications using Socket.IO.
- Implemented Stripe payment gateway.
- Designed layered backend architecture following SOLID principles.
- Built scalable REST APIs with JWT authentication and RBAC.
- Developed admin analytics and vet earnings management.
- Deployed on Render and Vercel using Docker.

2. MediSync | EMR & Appointment Management System
- Enterprise-grade Electronic Medical Records platform.
- Implemented JWT authentication with role-based access control.
- Built doctor scheduling and conflict-free appointment booking.
- Added Socket.IO powered real-time appointment updates.
- Used Zod validation and layered backend architecture.
- Developed dashboards for Super Admin, Doctor, and Receptionist roles.

3. CreditFlow | AI Financial Audit Platform
- Built an AI-powered financial audit platform using Next.js and Supabase.
- Implemented secure authentication and audit workflows.
- Added AI-assisted financial report generation.
- Designed scalable full-stack architecture with production-ready workflows.

4. VoteStream | Live Polling Platform
- Developed a real-time polling platform using Socket.IO.
- Implemented Firebase authentication and live vote synchronization.
- Built role-based poll management with low-latency updates.

5. CaseVerse | E-commerce Platform
- Developed a full-featured e-commerce platform.
- Integrated Razorpay payments.
- Built admin dashboard and analytics.
- Implemented JWT authentication and scalable REST APIs.

Professional Experience:

Full Stack Developer
ThinQ Technologies (Freelance)
Client: Moestay

Dec 2025 - Present

- Started as a Frontend Developer and later transitioned into a Full Stack role.
- Built scalable frontend applications using Next.js and TypeScript.
- Integrated REST APIs using RTK Query.
- Engineered backend features within a NestJS NX monorepo.
- Built role-based workflows across frontend and backend.
- Delivered production-ready full-stack features for property onboarding, booking, and admin modules.

Education:

BS Degree in Data Science and Applications (Pursuing)
IIT Madras

MERN Stack Development
Brototype

Higher Secondary Education - Computer Science
Sacred Heart Higher Secondary School, Kannur
`;


export async function getGeminiResponse(
  userMessage: string,
  chatHistory: any[]
) {
  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!API_KEY) {
    console.error("Gemini API key is missing");
    return {
      text: "Sorry, I'm not properly configured yet. Please contact the site owner.",
    };
  }
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });

    const recentMessages = chatHistory.slice(-3);
    const contextPrompt = `
    Your name is Buddy,You are a helpful assistant for Muhammed Razi P P who answers questions about his portfolio, skills, experience, and projects.
    Be concise, friendly, and professional in your responses.
    Only answer questions related to Razi's professional background, skills, experience, projects, or general career advice.
    If asked about anything not related to Razi or his professional work, politely redirect the conversation back to relevant topics.

    Here's information about Razi:
    ${PERSONAL_INFO}

    Recent conversation:
    ${recentMessages
        .map(
          (msg) => `${msg.sender === "user" ? "User" : "Assistant"}: ${msg.text}`
        )
        .join("\n")}

    User's latest question: ${userMessage}

    Your response (staying focused on Razi's professional information):`;
    const result = await model.generateContent(contextPrompt);
    const response = result.response;
    const text = response.text();
    return { text };
  } catch (error) {
    console.error("Error using Gemini SDK:", error);
    return {
      text: "Sorry, I encountered an error communicating with my AI backend. Please try again later.",
    };
  }
}
