"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col h-full w-full items-center justify-center py-20"
    >
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="Welcome-box py-8 px-7 border border-[#7042f88b] opacity-[0.9]"
      >
        <h1 className="Welcome-text text-4xl font-bold text-center">
          About Me
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.8)}
        initial="hidden"
        animate="visible"
        className="mt-10 max-w-3xl text-center text-gray-300"
      >
        <p>
          Hi, I am a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            passionate Agentic AI Engineer{" "}
          </span>{" "}
          with a knack for building innovative, scalable, and user-focused
          solutions that harness the power of modern technology. As a Certified
          Agentic & Robotic AI Engineer from Panaversity, I specialize in
          Python, Next.js, Tailwind CSS, LangGraph, Dapr, and Kubernetes, with a
          strong foundation in cloud-native development and event-driven
          architecture. My portfolio showcases impactful projects like an
          E-Commerce platform, a Task Management system, a Meter Readings
          Tracker, and a sleek Calculator app, each crafted with clean code,
          modern design principles, and seamless functionality.
        </p>

        <p className="mt-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Successfully transitioned{" "}
          </span>{" "}
          from owning a car detailing business (2020–2024), where I mastered
          digital marketing and customer engagement, to building scalable,
          AI-driven solutions in software development.
        </p>
        <p className="mt-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Collaboration{" "}
          </span>{" "}
          , continuous learning, and innovation drive my work. I&apos;m always
          eager to tackle new challenges, experiment with emerging tools, and
          deliver solutions that make a meaningful impact. If you&apos;re
          seeking a partner to bring your next AI-powered, cloud-native project
          to life, let&apos;s connect and build something extraordinary!
        </p>
        <p className="mt-4">
          Feel free to explore my projects or get in touch to collaborate!
        </p>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="Welcome-box py-8 px-7 border border-[#7042f88b] opacity-[0.9] mt-12"
      >
        <h1 className="Welcome-text text-4xl font-bold text-center">
          Experience
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.8)}
        initial="hidden"
        animate="visible"
        className="mt-10 max-w-3xl text-center text-gray-300"
      >
        <p>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Car Detailing Business, Self-Employed (Aug 2020 – Mar 2024):{" "}
          </span>{" "}
          Managed operations, leveraging Facebook marketing to drive customer
          engagement and conversions. Conducted consultations to ensure high
          satisfaction and analyzed feedback to refine services.
        </p>
        <p className="mt-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Customer Service Representative, K Electric (Mar 2014 – Dec 2017):{" "}
          </span>{" "}
          Delivered exceptional customer service, resolving inquiries
          efficiently, training staff on interaction protocols, and streamlining
          processes to boost team productivity.
        </p>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="Welcome-box py-8 px-7 border border-[#7042f88b] opacity-[0.9] mt-12"
      >
        <h1 className="Welcome-text text-4xl font-bold text-center">Skills</h1>
      </motion.div>
{/* SKills details  */}
      <motion.div
        variants={slideInFromLeft(0.8)}
        initial="hidden"
        animate="visible"
        className="mt-10 max-w-3xl text-center text-gray-300"
      >
        <p>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Core Technologies:{" "}
          </span>{" "}
          TypeScript, JavaScript, Python, HTML, CSS
        </p>
        <p className="mt-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Frameworks & Libraries:{" "}
          </span>{" "}
          Next.js, React, FastAPI, LangGraph, LangChain
        </p>

        <p className="mt-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Cloud-Native Expertise:{" "}
          </span>{" "}
          Event-Driven Architecture, Microservices, Dapr, Kubernetes, Docker,
          Vercel
        </p>
        <p className="mt-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Styling & UI:{" "}
          </span>{" "}
          Tailwind CSS, Shadcn UI, React-Three-Fiber
        </p>
        <p className="mt-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Standout Skills:{" "}
          </span>{" "}
          AI-Powered Application Development, Real-Time Data Visualization,
          Scalable System Design
        </p>
        <p className="mt-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Database & ORM:{" "}
          </span>{" "}
          PostgreSQL, Prisma, Drizzle ORM, Neon PostgreSQL
        </p>
        <p className="mt-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Tools:{" "}
          </span>{" "}
          Git, Poetry, NextAuth.js
        </p>
        <p className="mt-1">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            AI Automation:{" "}
          </span>{" "}
          Botpress, OpenAI SDK Agent
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
