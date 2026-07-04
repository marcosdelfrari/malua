"use client";

import { tarotDeck, CARD_SELECTION_COUNT } from "@/lib/data/cards";
import { cn } from "@/lib/utils";
import { Layers } from "lucide-react";

interface CardSelectionStepProps {
  selectedIds: number[];
  onToggle: (id: number) => void;
}

export function CardSelectionStep({
  selectedIds,
  onToggle,
}: CardSelectionStepProps) {
  const isFull = selectedIds.length >= CARD_SELECTION_COUNT;

  return (
    <div className="flex h-full min-h-0 flex-col gap-2 sm:gap-4">
      <header className="shrink-0 space-y-1 text-center sm:space-y-2">
        <h2 className="font-medieval text-lg tracking-wide text-gold-dark sm:text-3xl">
          Escolha suas Cartas
        </h2>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-dark/40 bg-gold/15 px-3 py-1 sm:gap-2 sm:px-4 sm:py-1.5">
          <Layers className="h-3 w-3 text-gold-dark sm:h-4 sm:w-4" />
          <span className="font-medieval text-[10px] text-gold-dark sm:text-sm">
            {selectedIds.length}/{CARD_SELECTION_COUNT} · {tarotDeck.length} cartas
          </span>
        </div>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-10 content-start gap-0.5 overflow-hidden sm:grid-cols-8 sm:gap-2 md:grid-cols-10 md:gap-3">
        {tarotDeck.map((card) => {
          const isSelected = selectedIds.includes(card.id);
          const Icon = card.icon;
          const disabled = isFull && !isSelected;

          return (
            <button
              key={card.id}
              type="button"
              disabled={disabled}
              onClick={() => onToggle(card.id)}
              title={card.name}
              className={cn(
                "group relative flex aspect-[2/3] flex-col items-center justify-center rounded-sm border transition-all duration-200 cursor-pointer sm:gap-1 sm:border-2 sm:p-1.5",
                "border-parchment-border/60 p-0",
                "disabled:cursor-not-allowed disabled:opacity-30",
                isSelected
                  ? "z-10 scale-110 border-gold-dark bg-gold/25 shadow-glow sm:scale-105"
                  : "bg-parchment-border/8 hover:border-gold-dark/60 sm:border-parchment-border/70"
              )}
            >
              <div
                className={cn(
                  "flex h-3.5 w-3.5 items-center justify-center rounded-full border sm:h-7 sm:w-7",
                  isSelected
                    ? "border-gold-dark text-gold-dark"
                    : "border-parchment-border/80 text-ink-muted group-hover:border-gold-dark/60 group-hover:text-gold-dark"
                )}
              >
                <Icon className="h-2 w-2 sm:h-3.5 sm:w-3.5" />
              </div>
              <span className="hidden text-[9px] leading-tight text-ink-muted line-clamp-2 sm:block">
                {card.name}
              </span>
              {isSelected && (
                <span className="absolute -top-px -right-px flex h-2.5 w-2.5 items-center justify-center rounded-full bg-gold-dark text-[6px] font-bold text-parchment sm:-top-1 sm:-right-1 sm:h-4 sm:w-4 sm:text-[10px]">
                  {selectedIds.indexOf(card.id) + 1}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
