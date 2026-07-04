"use client";

import { ScrollText } from "lucide-react";
import { getTheme, type ThemeId } from "@/lib/data/themes";
import { cn } from "@/lib/utils";

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
    <div className="flex h-full min-h-0 flex-col gap-2 sm:gap-6">
      <header className="shrink-0 space-y-0.5 text-center sm:space-y-2">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gold-dark/80 sm:text-xs sm:tracking-[0.3em]">
          {theme.label}
        </p>
        <h2 className="font-medieval text-lg tracking-wide text-gold-dark sm:text-3xl">
          Sua Pergunta
        </h2>
        <p className="mx-auto max-w-md text-[11px] text-ink-muted sm:text-base">
          Escolha a pergunta que ressoa com você
        </p>
      </header>

      <div className="flex min-h-0 flex-1 flex-col justify-center gap-1.5 overflow-hidden sm:gap-2">
        {theme.questions.map((question, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(question)}
            className={cn(
              "flex w-full shrink-0 items-center gap-2 rounded-sm border-2 p-2 text-left transition-all duration-200 cursor-pointer sm:gap-4 sm:p-4",
              "hover:border-gold-dark/70 hover:bg-gold/10",
              selected === question
                ? "border-gold-dark bg-gold/20 shadow-glow"
                : "border-parchment-border/70 bg-parchment-border/8"
            )}
          >
            <div
              className={cn(
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border sm:h-8 sm:w-8",
                selected === question
                  ? "border-gold-dark text-gold-dark"
                  : "border-parchment-border text-ink-muted"
              )}
            >
              <ScrollText className="h-3 w-3 sm:h-4 sm:w-4" />
            </div>
            <span className="text-[11px] leading-snug text-ink sm:text-base sm:leading-relaxed">
              {question}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
