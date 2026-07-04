"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { springSnappy, tapScale } from "@/lib/motion";

interface MedievalFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function MedievalFrame({ children, className }: MedievalFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "relative border-card bg-parchment text-ink shadow-medieval",
        className
      )}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
        <span className="text-lg text-gold-dark">❧</span>
      </div>
      {children}
    </motion.div>
  );
}

interface MedievalButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "secondary" | "ghost";
}

export function MedievalButton({
  children,
  className,
  variant = "primary",
  disabled,
  ...props
}: MedievalButtonProps) {
  return (
    <motion.button
      disabled={disabled}
      whileTap={disabled ? undefined : tapScale}
      whileHover={disabled ? undefined : { scale: 1.02 }}
      transition={springSnappy}
      className={cn(
        "font-medieval rounded-btn border-2 text-sm uppercase tracking-widest transition-colors duration-200",
        "px-6 py-3",
        "disabled:cursor-not-allowed disabled:opacity-40",
        variant === "primary" &&
          "border-gold-dark bg-gold/15 text-gold-dark hover:bg-gold/30 hover:shadow-glow",
        variant === "secondary" &&
          "border-parchment-border bg-parchment-border/10 text-ink hover:border-gold-dark hover:text-gold-dark",
        variant === "ghost" &&
          "border-transparent text-ink-muted hover:text-gold-dark",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

interface OptionCardProps {
  selected?: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  description?: string;
  compact?: boolean;
  /** Empilha ícone + texto na horizontal no mobile */
  stackOnMobile?: boolean;
}

export function OptionCard({
  selected,
  onClick,
  icon,
  label,
  description,
  compact = false,
  stackOnMobile = false,
}: OptionCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={tapScale}
      transition={springSnappy}
      className={cn(
        "group flex w-full cursor-pointer transition-colors duration-200",
        compact
          ? cn(
              "gap-4 border-card p-4 sm:p-6",
              stackOnMobile
                ? "flex-row items-center sm:h-full sm:flex-col sm:items-center sm:justify-center sm:gap-3"
                : "h-full flex-col items-center justify-center gap-2 sm:gap-3"
            )
          : "flex-col items-center justify-center gap-3 border-card p-6",
        "hover:border-gold-dark/70 hover:bg-gold/10",
        selected
          ? "border-gold-dark bg-gold/20 ring-2 ring-gold-dark/20"
          : "bg-parchment-border/8"
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full border-2 transition-colors",
          compact
            ? stackOnMobile
              ? "h-12 w-12 sm:h-14 sm:w-14"
              : "h-10 w-10 sm:h-14 sm:w-14"
            : "h-14 w-14",
          selected
            ? "border-gold-dark bg-gold/15 text-gold-dark"
            : "border-parchment-border text-ink-muted group-hover:border-gold-dark group-hover:text-gold-dark"
        )}
      >
        {icon}
      </div>
      <div
        className={cn(
          "min-w-0",
          stackOnMobile && "flex-1 text-left sm:flex-none sm:text-center"
        )}
      >
        <span
          className={cn(
            "font-medieval block leading-tight",
            compact
              ? stackOnMobile
                ? "text-sm sm:text-base"
                : "text-xs sm:text-base"
              : "text-base",
            selected ? "text-gold-dark" : "text-ink"
          )}
        >
          {label}
        </span>
        {description && (
          <span
            className={cn(
              "mt-1 block leading-snug text-ink-muted",
              compact
                ? stackOnMobile
                  ? "text-xs sm:mt-0 sm:text-xs"
                  : "hidden text-[10px] sm:block sm:text-xs"
                : "text-xs"
            )}
          >
            {description}
          </span>
        )}
      </div>
    </motion.button>
  );
}
