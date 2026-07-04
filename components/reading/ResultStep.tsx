"use client";

import {
  getCardById,
  generateReadingSummary,
  type TarotCard,
} from "@/lib/data/cards";
import {
  getTheme,
  getSubthemeLabel,
  type SubthemeId,
  type ThemeId,
} from "@/lib/data/themes";
import { MedievalButton } from "./MedievalUI";
import { Sparkles } from "lucide-react";

interface ResultStepProps {
  themeId: ThemeId;
  subthemeId: SubthemeId;
  question: string;
  cardIds: number[];
  onRestart: () => void;
}

function CardReveal({
  card,
  position,
  themeId,
}: {
  card: TarotCard;
  position: number;
  themeId: ThemeId;
}) {
  const Icon = card.icon;
  const positions = [
    "Passado / Raiz",
    "Presente / Desafio",
    "Futuro / Conselho",
    "Influência Oculta",
    "Resultado / Caminho",
  ];

  return (
    <article className="rounded-sm border-2 border-parchment-border/60 bg-parchment-border/10 p-4 sm:p-5 space-y-3">
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center gap-1 shrink-0">
          <div className="flex h-16 w-12 sm:h-20 sm:w-14 items-center justify-center rounded-sm border-2 border-gold-dark bg-gold/15">
            <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-gold-dark" />
          </div>
          <span className="text-[10px] text-gold-dark/80 uppercase tracking-wider">
            {positions[position] ?? `Carta ${position + 1}`}
          </span>
        </div>
        <div className="flex-1 min-w-0 space-y-2">
          <div>
            <h3 className="font-medieval text-lg text-gold-dark">{card.name}</h3>
            <p className="text-xs text-ink-muted">
              {card.keywords.join(" · ")}
            </p>
          </div>
          <p className="text-sm text-ink leading-relaxed">
            {card.meaning.upright}
          </p>
          <p className="text-sm text-ink-light leading-relaxed italic border-l-2 border-gold-dark/40 pl-3">
            {card.meaning.contextual[themeId]}
          </p>
        </div>
      </div>
    </article>
  );
}

export function ResultStep({
  themeId,
  subthemeId,
  question,
  cardIds,
  onRestart,
}: ResultStepProps) {
  const theme = getTheme(themeId);
  const cards = cardIds
    .map(getCardById)
    .filter((c): c is TarotCard => c !== undefined);
  const summary = generateReadingSummary(themeId, cardIds);

  return (
    <div className="space-y-4 pb-2 sm:space-y-6 sm:pb-4">
      <header className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-gold-dark">
          <Sparkles className="h-5 w-5" />
          <span className="font-medieval text-xs uppercase tracking-[0.4em]">
            Sua Leitura
          </span>
          <Sparkles className="h-5 w-5" />
        </div>
        <h2 className="font-medieval text-2xl sm:text-3xl text-gold-dark tracking-wide">
          {theme?.label} · {getSubthemeLabel(themeId, subthemeId)}
        </h2>
      </header>

      <blockquote className="relative px-6 py-4 rounded-sm border border-gold-dark/30 bg-gold/10 text-center">
        <span className="absolute top-1 left-3 text-gold-dark/40 text-2xl font-medieval">
          &ldquo;
        </span>
        <p className="text-ink italic text-sm sm:text-base leading-relaxed">
          {question}
        </p>
        <span className="absolute bottom-0 right-3 text-gold-dark/40 text-2xl font-medieval">
          &rdquo;
        </span>
      </blockquote>

      <section className="rounded-sm border-2 border-gold-dark/30 bg-parchment-border/10 p-4 sm:p-5">
        <h3 className="font-medieval text-sm uppercase tracking-widest text-gold-dark mb-3">
          Visão Geral do Conjunto
        </h3>
        <p className="text-ink text-sm sm:text-base leading-relaxed">
          {summary}
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-medieval text-sm uppercase tracking-widest text-gold-dark text-center">
          Cartas Reveladas
        </h3>
        {cards.map((card, index) => (
          <CardReveal
            key={card.id}
            card={card}
            position={index}
            themeId={themeId}
          />
        ))}
      </section>

      <div className="flex justify-center pt-4">
        <MedievalButton onClick={onRestart} variant="secondary">
          Nova Leitura
        </MedievalButton>
      </div>
    </div>
  );
}
