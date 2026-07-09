import { motion } from "motion/react";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
  hoverEffect?: boolean;
  onClick?: () => void;
  id?: string;
  key?: React.Key;
}

export default function GlassCard({
  children,
  className = "",
  variant = "light",
  hoverEffect = true,
  onClick,
  id,
}: GlassCardProps) {
  const baseStyle = variant === "light" ? "glass-light text-navy-900" : "glass-dark text-white";
  const clickStyle = onClick ? "cursor-pointer" : "";

  return (
    <motion.div
      id={id}
      onClick={onClick}
      className={`rounded-2xl p-6 shadow-sm border border-white/20 transition-all duration-300 ${baseStyle} ${clickStyle} ${className}`}
      whileHover={
        hoverEffect
          ? {
              y: -5,
              borderColor: "rgba(212, 165, 55, 0.4)",
              boxShadow: "0 12px 24px -10px rgba(212, 165, 55, 0.15)",
            }
          : {}
      }
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
