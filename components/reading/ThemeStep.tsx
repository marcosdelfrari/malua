"use client";

import { motion } from "framer-motion";
import { Heart, Briefcase, Home } from "lucide-react";
import { themes, type ThemeId } from "@/lib/data/themes";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
import { OptionCard } from "./MedievalUI";

const themeIcons: Record<ThemeId, React.ReactNode> = {
  relacionamento: <Heart className="h-6 w-6 sm:h-7 sm:w-7" />,
  trabalho: <Briefcase className="h-6 w-6 sm:h-7 sm:w-7" />,
  familia: <Home className="h-6 w-6 sm:h-7 sm:w-7" />,
};

interface ThemeStepProps {
  selected: ThemeId | null;
  onSelect: (id: ThemeId) => void;
}

export function ThemeStep({ selected, onSelect }: ThemeStepProps) {
  return (
    <div className="flex h-full min-h-0 flex-col gap-4 sm:gap-6">
      <motion.header
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="shrink-0 space-y-1.5 text-center sm:space-y-2"
      >
        <h2 className="font-medieval text-xl tracking-wide text-gold-dark sm:text-3xl">
          Escolha seu Tema
        </h2>
        <p className="mx-auto max-w-md text-sm text-ink-muted sm:text-base">
          Sobre qual área da sua vida você busca orientação?
        </p>
      </motion.header>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid min-h-0 flex-1 content-center grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5"
      >
        {themes.map((theme) => (
          <motion.div key={theme.id} variants={staggerItem} className="w-full sm:h-full">
            <OptionCard
              selected={selected === theme.id}
              onClick={() => onSelect(theme.id)}
              icon={themeIcons[theme.id]}
              label={theme.label}
              description={theme.description}
              compact
              stackOnMobile
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
