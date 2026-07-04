"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { springSnappy } from "@/lib/motion";

const STEPS = [
  { number: 1, label: "Tema" },
  { number: 2, label: "Subtema" },
  { number: 3, label: "Pergunta" },
  { number: 4, label: "Cartas" },
  { number: 5, label: "Leitura" },
];

interface StepIndicatorProps {
  currentStep: number;
}

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <nav aria-label="Progresso da leitura" className="w-full">
      <ol className="flex items-center justify-between gap-1 sm:gap-2">
        {STEPS.map((step) => {
          const isActive = step.number === currentStep;
          const isComplete = step.number < currentStep;

          return (
            <li key={step.number} className="flex flex-1 flex-col items-center">
              <div className="flex w-full items-center">
                {step.number > 1 && (
                  <motion.div
                    className="h-px flex-1"
                    animate={{
                      backgroundColor:
                        isComplete || isActive
                          ? "var(--gold)"
                          : "var(--parchment-border)",
                    }}
                    transition={{ duration: 0.4 }}
                  />
                )}
                <motion.div
                  layout
                  animate={{
                    scale: isActive ? 1.12 : 1,
                    backgroundColor: isComplete
                      ? "var(--gold)"
                      : isActive
                        ? "rgba(201, 162, 39, 0.2)"
                        : "rgba(44, 24, 16, 0.5)",
                    borderColor: isComplete || isActive
                      ? "var(--gold)"
                      : "var(--parchment-border)",
                    color: isComplete
                      ? "var(--parchment-dark)"
                      : isActive
                        ? "var(--gold)"
                        : "var(--parchment-muted)",
                  }}
                  transition={springSnappy}
                  className={cn(
                    "relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 font-medieval text-[10px] font-semibold sm:h-10 sm:w-10 sm:text-sm",
                    isActive && "shadow-glow"
                  )}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isComplete ? "complete" : "number"}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isComplete ? "✦" : step.number}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
                {step.number < STEPS.length && (
                  <motion.div
                    className="h-px flex-1"
                    animate={{
                      backgroundColor: isComplete
                        ? "var(--gold)"
                        : "var(--parchment-border)",
                    }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </div>
              <motion.span
                animate={{
                  color: isActive ? "var(--gold)" : "var(--parchment-muted)",
                }}
                className="mt-1.5 hidden text-[10px] uppercase tracking-widest sm:block"
              >
                {step.label}
              </motion.span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
