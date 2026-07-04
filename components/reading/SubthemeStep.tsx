"use client";

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
    <div className="flex h-full min-h-0 flex-col gap-2 sm:gap-6">
      <header className="shrink-0 space-y-0.5 text-center sm:space-y-2">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gold-dark/80 sm:text-xs sm:tracking-[0.3em]">
          {theme.label}
        </p>
        <h2 className="font-medieval text-lg tracking-wide text-gold-dark sm:text-3xl">
          Escolha o Subtema
        </h2>
        <p className="mx-auto max-w-md text-[11px] text-ink-muted sm:text-base">
          Refine sua intenção para uma leitura mais precisa
        </p>
      </header>

      <div className="grid min-h-0 flex-1 grid-cols-2 content-start gap-2 sm:grid-cols-3 sm:gap-4">
        {theme.subthemes.map((sub) => (
          <OptionCard
            key={sub.id}
            selected={selected === sub.id}
            onClick={() => onSelect(sub.id)}
            icon={subthemeIcons[sub.id]}
            label={sub.label}
            compact
          />
        ))}
      </div>
    </div>
  );
}
