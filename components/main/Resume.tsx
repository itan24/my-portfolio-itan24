"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";

const Resume = () => {
  const handleDownload = () => {
    // Trigger download
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/16Lqc-hTtfPYWbs4Kt2VMZeMwdQZbKv6i/view?usp=drive_link";
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed bottom-6 right-16 z-[9990] mr-2">
      <motion.button
        className="p-3 rounded-full bg-gradient-to-b from-[#3C087E]/50 to-[#712FFF]/30 text-white shadow-[inset_0_0_12px_rgba(191,151,255,0.5)] hover:bg-gradient-to-b hover:from-[#3C087E]/70 hover:to-[#712FFF]/50 transition-all duration-300 cursor-pointer"
        onClick={handleDownload}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaFilePdf size={16} />
      </motion.button>
    </div>
  );
};

export default Resume;