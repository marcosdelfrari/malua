"use client";

import { Heart, Briefcase, Home } from "lucide-react";
import { themes, type ThemeId } from "@/lib/data/themes";
import { OptionCard } from "./MedievalUI";

const themeIcons: Record<ThemeId, React.ReactNode> = {
  relacionamento: <Heart className="h-5 w-5 sm:h-7 sm:w-7" />,
  trabalho: <Briefcase className="h-5 w-5 sm:h-7 sm:w-7" />,
  familia: <Home className="h-5 w-5 sm:h-7 sm:w-7" />,
};

interface ThemeStepProps {
  selected: ThemeId | null;
  onSelect: (id: ThemeId) => void;
}

export function ThemeStep({ selected, onSelect }: ThemeStepProps) {
  return (
    <div className="flex h-full min-h-0 flex-col gap-2 sm:gap-6">
      <header className="shrink-0 space-y-0.5 text-center sm:space-y-2">
        <h2 className="font-medieval text-lg tracking-wide text-gold-dark sm:text-3xl">
          Escolha seu Tema
        </h2>
        <p className="mx-auto max-w-md text-[11px] text-ink-muted sm:text-base">
          Sobre qual área da sua vida você busca orientação?
        </p>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-3 gap-2 sm:gap-4">
        {themes.map((theme) => (
          <OptionCard
            key={theme.id}
            selected={selected === theme.id}
            onClick={() => onSelect(theme.id)}
            icon={themeIcons[theme.id]}
            label={theme.label}
            description={theme.description}
            compact
          />
        ))}
      </div>
    </div>
  );
}
