"use client";
import { motion } from "motion/react";

const Marque = ({ children, speed = 10, gap = 40 }) => {
    const styleText = `flex text-xl items-center gap-3 font-semibold gap-${gap}`
  return (
    <div className="w-full bg-myPrimary  text-white p-2 px-4 -rotate-1 h-15 overflow-hidden mt-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
        className="flex gap-2 items-center whitespace-nowrap h-full"
      >
        <div className={styleText}>{ children }</div>
        <div className={styleText}>{ children }</div>
        <div className={styleText}>{ children }</div>
      </motion.div>
    </div>
  );
};

export default Marque;
