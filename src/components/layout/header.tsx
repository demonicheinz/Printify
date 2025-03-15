"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export function Header({ title, description }: { title: string; description?: string }) {
  return (
    <motion.div
      className="text-center mb-12"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {description && (
        <div className="text-muted-foreground max-w-3xl mx-auto">
          <TextGenerateEffect
            words={description}
            className="text-xl"
            duration={0.3}
          />
        </div>
      )}
    </motion.div>
  );
}
