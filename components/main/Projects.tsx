import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/meter-tracker.png"
          title="Meter Reading Tracker"
          description="Monitor meter readings, predict bills, and manage all your profiles in one place. Stay on top of usage with automatic calculations."
          link="https://my-meter-app.vercel.app/dashboard"
        />
        <ProjectCard
          src="/ecommerece.png"
          title="Ecommerece Website"
          description="Practice-ready Next.js app with cart functionality, secure login, and an admin panel. Includes AI-powered product search via chatbot. No real payments—just pure dev showcase!."
          link="https://ecommerce-app-phi-gilt.vercel.app"
        />
        <ProjectCard
          src="/task manager.png"
          title="Task Manager"
          description="Blazing-fast task management with secure auth, responsive dashboard, and CRUD operations. Built with Next.js, Tailwind, and Prisma ORM."
          link="https://my-task-manager-nu.vercel.app"
        />
        <ProjectCard
          src="/calculator.png"
          title="Calculator"
          description="Toggles between basic and scientific math, supports keyboard input, and offers dark/light themes. A clean-code demo of Next.js and Tailwind flexibility."
          link="https://my-calculator-eight-delta.vercel.app"
        />
      </div>
    </div>
  );
};

export default Projects;