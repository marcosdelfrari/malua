"use client";

import { motion } from "framer-motion";
import {
  HeartHandshake,
  Flame,
  Gem,
  EyeOff,
  Swords,
  TrendingUp,
  Shield,
  Users,
  UserX,
} from "lucide-react";
import { getTheme, type SubthemeId, type ThemeId } from "@/lib/data/themes";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";
import { OptionCard } from "./MedievalUI";

const subthemeIcons: Record<SubthemeId, React.ReactNode> = {
  namoro: <HeartHandshake className="h-5 w-5 sm:h-6 sm:w-6" />,
  ficante: <Flame className="h-5 w-5 sm:h-6 sm:w-6" />,
  casamento: <Gem className="h-5 w-5 sm:h-6 sm:w-6" />,
  traição: <EyeOff className="h-5 w-5 sm:h-6 sm:w-6" />,
  "brigas-rel": <Swords className="h-5 w-5 sm:h-6 sm:w-6" />,
  "futuro-empresa": <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />,
  estabilidade: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />,
  "brigas-fam": <Users className="h-5 w-5 sm:h-6 sm:w-6" />,
  "traições-fam": <UserX className="h-5 w-5 sm:h-6 sm:w-6" />,
};

interface SubthemeStepProps {
  themeId: ThemeId;
  selected: SubthemeId | null;
  onSelect: (id: SubthemeId) => void;
}

export function SubthemeStep({
  themeId,
  selected,
  onSelect,
}: SubthemeStepProps) {
  const theme = getTheme(themeId);
  if (!theme) return null;

  return (
    <div className="flex h-full min-h-0 flex-col gap-4 sm:gap-6">
      <motion.header
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="shrink-0 space-y-1.5 text-center sm:space-y-2"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-gold-dark/80 sm:tracking-[0.3em]">
          {theme.label}
        </p>
        <h2 className="font-medieval text-xl tracking-wide text-gold-dark sm:text-3xl">
          Escolha o Subtema
        </h2>
        <p className="mx-auto max-w-md text-sm text-ink-muted sm:text-base">
          Refine sua intenção para uma leitura mais precisa
        </p>
      </motion.header>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="grid min-h-0 flex-1 content-start grid-cols-1 gap-3 overflow-y-auto scrollbar-medieval sm:grid-cols-2 sm:gap-4 md:grid-cols-3"
      >
        {theme.subthemes.map((sub) => (
          <motion.div key={sub.id} variants={staggerItem} className="w-full">
            <OptionCard
              selected={selected === sub.id}
              onClick={() => onSelect(sub.id)}
              icon={subthemeIcons[sub.id]}
              label={sub.label}
              compact
              stackOnMobile
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
