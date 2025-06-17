"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/ai.jpg"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold text-sm md:text-md ml-[2px] text-gray-300">
            Fullstack Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              &{" "}
            </span> Cloud Native AI Engineer
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="md:hidden text-white z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <Link href={social.link || "#"} key={social.name} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            ref={menuRef}
            className="absolute top-[65px] right-0 w-[200px] bg-[#03001417] backdrop-blur-md md:hidden border border-[#7042f861] rounded-bl-lg"
          >
            <div className="flex flex-col items-end py-4 pr-6 space-y-4">
              <a 
                href="#about" 
                className="text-gray-200 hover:text-white transition-colors"
                onClick={handleLinkClick}
              >
                About me
              </a>
              <a 
                href="#skills" 
                className="text-gray-200 hover:text-white transition-colors"
                onClick={handleLinkClick}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="text-gray-200 hover:text-white transition-colors"
                onClick={handleLinkClick}
              >
                Projects
              </a>
              <div className="flex flex-row gap-5 pt-4">
                {Socials.map((social) => (
                  <Link 
                    href={social.link || "#"} 
                    key={social.name} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      key={social.name}
                      width={24}
                      height={24}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;