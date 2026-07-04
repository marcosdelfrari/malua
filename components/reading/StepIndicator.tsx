"use client";

import { cn } from "@/lib/utils";

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
                  <div
                    className={cn(
                      "h-px flex-1 transition-colors",
                      isComplete || isActive ? "bg-gold" : "bg-parchment-border"
                    )}
                  />
                )}
                <div
                  className={cn(
                    "relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 font-medieval text-[10px] font-semibold transition-all sm:h-10 sm:w-10 sm:text-sm",
                    isActive &&
                      "scale-110 border-gold bg-gold/20 text-gold shadow-glow",
                    isComplete && "border-gold bg-gold text-parchment-dark",
                    !isActive &&
                      !isComplete &&
                      "border-parchment-border bg-parchment-dark/50 text-parchment-muted"
                  )}
                >
                  {isComplete ? "✦" : step.number}
                </div>
                {step.number < STEPS.length && (
                  <div
                    className={cn(
                      "h-px flex-1 transition-colors",
                      isComplete ? "bg-gold" : "bg-parchment-border"
                    )}
                  />
                )}
              </div>
              <span
                className={cn(
                  "mt-1.5 hidden text-[10px] uppercase tracking-widest sm:block",
                  isActive ? "text-gold" : "text-parchment-muted"
                )}
              >
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
