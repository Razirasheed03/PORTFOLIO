"use client";

import { useRef, useState, useEffect } from "react";

export default function About() {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
const fullText =
  "I am a Full Stack Developer with 2+ years of hands-on experience building scalable web applications using React, Next.js, Node.js, Express.js, TypeScript, and MongoDB. I enjoy engineering production-ready applications with clean architecture, secure REST APIs, real-time communication, and modern development practices. Passionate about solving complex problems and continuously learning new technologies, I focus on building performant, maintainable, and user-centric software that delivers real business value.";
  const typingSpeed = 50;
  const cursorBlinkSpeed = 500;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  useEffect(() => {
    if (isTypingComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, cursorBlinkSpeed);

      return () => {
        clearInterval(cursorInterval);
      };
    }
  }, [isTypingComplete]);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <div className="space-y-4 text-lg text-muted-foreground">
        <p>
          {displayText}
          {(!isTypingComplete || showCursor) && "_"}
        </p>
      </div>
    </div>
  );
}
