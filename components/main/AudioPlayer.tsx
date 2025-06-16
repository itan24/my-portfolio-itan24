"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      <motion.button
        className="p-3 rounded-full bg-gradient-to-b from-[#3C087E]/50 to-[#712FFF]/30 text-white shadow-[inset_0_0_12px_rgba(191,151,255,0.5)] hover:bg-gradient-to-b hover:from-[#3C087E]/70 hover:to-[#712FFF]/50 transition-all duration-300 cursor-pointer"
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
      </motion.button>
      <audio ref={audioRef} loop>
        <source src="/music/background.mp3" type="audio/mp3" />
        <source src="/music/background.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;