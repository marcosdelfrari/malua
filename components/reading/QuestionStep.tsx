"use client";

import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";
import { getTheme, type ThemeId } from "@/lib/data/themes";
import { cn } from "@/lib/utils";
import {
  fadeInUp,
  springSnappy,
  staggerContainer,
  staggerItem,
  tapScale,
} from "@/lib/motion";

interface QuestionStepProps {
  themeId: ThemeId;
  selected: string | null;
  onSelect: (question: string) => void;
}

export function QuestionStep({
  themeId,
  selected,
  onSelect,
}: QuestionStepProps) {
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
          Sua Pergunta
        </h2>
        <p className="mx-auto max-w-md text-sm text-ink-muted sm:text-base">
          Escolha a pergunta que ressoa com você
        </p>
      </motion.header>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="flex min-h-0 flex-1 flex-col justify-start gap-3 overflow-y-auto overscroll-contain py-1 scrollbar-medieval sm:gap-3"
      >
        {theme.questions.map((question, index) => {
          const isSelected = selected === question;

          return (
            <motion.button
              key={index}
              type="button"
              variants={staggerItem}
              onClick={() => onSelect(question)}
              whileTap={tapScale}
              transition={springSnappy}
              className={cn(
                "border-card flex w-full shrink-0 cursor-pointer items-center gap-3 p-4 text-left transition-colors duration-200 sm:gap-4 sm:p-4",
                "hover:border-gold-dark/70 hover:bg-gold/10",
                isSelected
                  ? "border-gold-dark bg-gold/20 ring-2 ring-gold-dark/20"
                  : "bg-parchment-border/8"
              )}
            >
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 transition-colors sm:h-8 sm:w-8",
                  isSelected
                    ? "border-gold-dark text-gold-dark"
                    : "border-parchment-border text-ink-muted"
                )}
              >
                <ScrollText className="h-4 w-4" />
              </div>
              <span className="text-sm leading-snug text-ink sm:text-base sm:leading-relaxed">
                {question}
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
