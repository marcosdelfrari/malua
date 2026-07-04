"use client";

import { motion } from "framer-motion";
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
import {
  cardRevealVariants,
  fadeInUp,
} from "@/lib/motion";
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
  index,
}: {
  card: TarotCard;
  position: number;
  themeId: ThemeId;
  index: number;
}) {
  const Icon = card.icon;
  const positions = [
    "Passado / Raiz",
    "Presente / Desafio",
    "Futuro / Conselho",
    "Influência Oculta",
    "Resultado / Caminho",
  ];

  const positionLabel = positions[position] ?? `Carta ${position + 1}`;

  return (
    <motion.article
      custom={index}
      variants={cardRevealVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4 rounded-md border-[3px] border-parchment-border/70 bg-parchment-border/10 p-5 sm:rounded-sm sm:border-2 sm:border-parchment-border/60 sm:p-6"
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
        <motion.div
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ delay: index * 0.12 + 0.2, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex w-full shrink-0 flex-col items-center gap-2 border-b border-parchment-border/30 pb-4 sm:w-auto sm:border-b-0 sm:pb-0"
          style={{ perspective: 800 }}
        >
          <div className="flex h-20 w-16 items-center justify-center rounded-md border-[3px] border-gold-dark bg-gold/15 sm:h-20 sm:w-14 sm:rounded-sm sm:border-2">
            <Icon className="h-7 w-7 text-gold-dark sm:h-8 sm:w-8" />
          </div>
          <span className="max-w-[140px] text-center text-[10px] uppercase leading-tight tracking-wider text-gold-dark/80">
            {positionLabel}
          </span>
        </motion.div>
        <div className="min-w-0 flex-1 space-y-3 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-medieval text-xl text-gold-dark sm:text-lg">
              {card.name}
            </h3>
            <p className="text-xs text-ink-muted">
              {card.keywords.join(" · ")}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-ink">
            {card.meaning.upright}
          </p>
          <p className="rounded-md border-l-[3px] border-gold-dark/40 bg-gold/5 px-4 py-3 text-left text-sm italic leading-relaxed text-ink-light sm:border-l-2 sm:bg-transparent sm:px-0 sm:py-0 sm:pl-4">
            {card.meaning.contextual[themeId]}
          </p>
        </div>
      </div>
    </motion.article>
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
    <div className="space-y-5 pb-2 sm:space-y-6 sm:pb-4">
      <motion.header
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="space-y-3 text-center"
      >
        <div className="inline-flex items-center gap-2 text-gold-dark">
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-5 w-5" />
          </motion.div>
          <span className="font-medieval text-xs uppercase tracking-[0.4em]">
            Sua Leitura
          </span>
          <motion.div
            animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-5 w-5" />
          </motion.div>
        </div>
        <h2 className="font-medieval text-2xl tracking-wide text-gold-dark sm:text-3xl">
          {theme?.label} · {getSubthemeLabel(themeId, subthemeId)}
        </h2>
      </motion.header>

      <motion.blockquote
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.15 }}
        className="relative rounded-md border-2 border-gold-dark/30 bg-gold/10 px-5 py-5 text-center sm:rounded-sm sm:px-6 sm:py-4"
      >
        <span className="absolute top-1 left-3 font-medieval text-2xl text-gold-dark/40">
          &ldquo;
        </span>
        <p className="text-sm italic leading-relaxed text-ink sm:text-base">
          {question}
        </p>
        <span className="absolute right-3 bottom-0 font-medieval text-2xl text-gold-dark/40">
          &rdquo;
        </span>
      </motion.blockquote>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.25 }}
        className="rounded-md border-[3px] border-gold-dark/30 bg-parchment-border/10 p-5 sm:rounded-sm sm:border-2 sm:p-5"
      >
        <h3 className="mb-4 font-medieval text-sm uppercase tracking-widest text-gold-dark">
          Visão Geral do Conjunto
        </h3>
        <p className="text-sm leading-relaxed text-ink sm:text-base">
          {summary}
        </p>
      </motion.section>

      <section className="space-y-4">
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="text-center font-medieval text-sm uppercase tracking-widest text-gold-dark"
        >
          Cartas Reveladas
        </motion.h3>
        {cards.map((card, index) => (
          <CardReveal
            key={card.id}
            card={card}
            position={index}
            themeId={themeId}
            index={index}
          />
        ))}
      </section>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
        className="flex justify-center pt-4"
      >
        <MedievalButton onClick={onRestart} variant="secondary">
          Nova Leitura
        </MedievalButton>
      </motion.div>
    </div>
  );
}
