"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";
import type { ThemeId, SubthemeId } from "@/lib/data/themes";
import { CARD_SELECTION_COUNT } from "@/lib/data/cards";
import { cn } from "@/lib/utils";
import { stepTransition, stepVariants } from "@/lib/motion";
import { StepIndicator } from "./StepIndicator";
import { MedievalFrame, MedievalButton } from "./MedievalUI";
import { ThemeStep } from "./ThemeStep";
import { SubthemeStep } from "./SubthemeStep";
import { QuestionStep } from "./QuestionStep";
import { CardSelectionStep } from "./CardSelectionStep";
import { ResultStep } from "./ResultStep";

const TOTAL_STEPS = 5;

export function ReadingWizard() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [themeId, setThemeId] = useState<ThemeId | null>(null);
  const [subthemeId, setSubthemeId] = useState<SubthemeId | null>(null);
  const [question, setQuestion] = useState<string | null>(null);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);

  const canProceed = useCallback(() => {
    switch (step) {
      case 1:
        return themeId !== null;
      case 2:
        return subthemeId !== null;
      case 3:
        return question !== null;
      case 4:
        return selectedCards.length === CARD_SELECTION_COUNT;
      default:
        return false;
    }
  }, [step, themeId, subthemeId, question, selectedCards]);

  const handleNext = () => {
    if (canProceed() && step < TOTAL_STEPS) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  };

  const handleThemeSelect = (id: ThemeId) => {
    setThemeId(id);
    setSubthemeId(null);
    setQuestion(null);
  };

  const handleToggleCard = (id: number) => {
    setSelectedCards((prev) => {
      if (prev.includes(id)) return prev.filter((c) => c !== id);
      if (prev.length >= CARD_SELECTION_COUNT) return prev;
      return [...prev, id];
    });
  };

  const handleRestart = () => {
    setDirection(-1);
    setStep(1);
    setThemeId(null);
    setSubthemeId(null);
    setQuestion(null);
    setSelectedCards([]);
  };

  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden bg-medieval-gradient">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgNDBoNDBNMjAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDIwMSwxNjIsOTAsMC4wMykiLz48L3N2Zz4=')] opacity-50" />

      <div className="relative mx-auto flex min-h-0 w-full max-w-4xl flex-1 flex-col px-4 py-4 sm:px-6 sm:py-6">
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-2 shrink-0 text-center sm:mb-5"
        >
          <div className="mb-1 inline-flex items-center gap-2 sm:mb-2 sm:gap-3">
            <motion.div
              animate={{ rotate: [0, 12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sun className="h-5 w-5 text-gold sm:h-8 sm:w-8" />
            </motion.div>
            <h1 className="font-medieval-display text-2xl tracking-wider text-gold sm:text-4xl">
              Malua
            </h1>
            <motion.div
              animate={{ rotate: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Moon className="h-5 w-5 text-gold sm:h-8 sm:w-8" />
            </motion.div>
          </div>
        </motion.header>

        <div className="mb-4 shrink-0 sm:mb-5">
          <StepIndicator currentStep={step} />
        </div>

        <MedievalFrame className="flex min-h-0 flex-1 flex-col overflow-hidden p-4 sm:p-8 md:p-10">
          <div
            className={cn(
              "relative flex min-h-0 flex-1 flex-col",
              step === 5
                ? "overflow-y-auto scrollbar-medieval"
                : "overflow-hidden",
            )}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={stepTransition}
                className="flex min-h-0 flex-1 flex-col"
              >
                {step === 1 && (
                  <ThemeStep selected={themeId} onSelect={handleThemeSelect} />
                )}
                {step === 2 && themeId && (
                  <SubthemeStep
                    themeId={themeId}
                    selected={subthemeId}
                    onSelect={setSubthemeId}
                  />
                )}
                {step === 3 && themeId && (
                  <QuestionStep
                    themeId={themeId}
                    selected={question}
                    onSelect={setQuestion}
                  />
                )}
                {step === 4 && (
                  <CardSelectionStep
                    selectedIds={selectedCards}
                    onToggle={handleToggleCard}
                  />
                )}
                {step === 5 && themeId && subthemeId && question && (
                  <ResultStep
                    themeId={themeId}
                    subthemeId={subthemeId}
                    question={question}
                    cardIds={selectedCards}
                    onRestart={handleRestart}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {step < 5 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className="mt-4 flex shrink-0 items-center justify-between border-t border-parchment-border/40 pt-4 sm:mt-5 sm:pt-5"
              >
                <MedievalButton
                  variant="ghost"
                  onClick={handleBack}
                  disabled={step === 1}
                  className="flex items-center gap-1 px-3 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Voltar
                </MedievalButton>
                <MedievalButton
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex items-center gap-1 px-3 py-2 text-xs sm:px-6 sm:py-3 sm:text-sm"
                >
                  {step === 4 ? "Revelar Leitura" : "Continuar"}
                  <ChevronRight className="h-4 w-4" />
                </MedievalButton>
              </motion.div>
            )}
          </AnimatePresence>
        </MedievalFrame>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-2 hidden shrink-0 text-center text-xs text-parchment-muted/50 sm:block"
        >
          <p>✦ As cartas são guias — a sabedoria final reside em você ✦</p>
        </motion.footer>
      </div>
    </div>
  );
}
