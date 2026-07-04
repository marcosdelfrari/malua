import { cn } from "@/lib/utils";

interface MedievalFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function MedievalFrame({ children, className }: MedievalFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-sm border-2 border-parchment-border/60 bg-parchment text-ink shadow-medieval",
        "before:absolute before:inset-2 before:rounded-sm before:border before:border-gold/25 before:pointer-events-none",
        className
      )}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
        <span className="text-gold-dark text-lg">❧</span>
      </div>
      {children}
    </div>
  );
}

interface MedievalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
    <button
      disabled={disabled}
      className={cn(
        "font-medieval text-sm uppercase tracking-widest transition-all duration-200",
        "px-6 py-3 rounded-sm border-2",
        "disabled:opacity-40 disabled:cursor-not-allowed",
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
    </button>
  );
}

interface OptionCardProps {
  selected?: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  description?: string;
  compact?: boolean;
}

export function OptionCard({
  selected,
  onClick,
  icon,
  label,
  description,
  compact = false,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group flex cursor-pointer flex-col items-center justify-center transition-all duration-200",
        compact
          ? "h-full gap-1.5 rounded-sm border-2 p-2 sm:gap-3 sm:p-6"
          : "gap-3 rounded-sm border-2 p-6",
        "hover:border-gold-dark/70 hover:bg-gold/10",
        selected
          ? "border-gold-dark bg-gold/20 shadow-glow"
          : "border-parchment-border/70 bg-parchment-border/8"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center rounded-full border-2 transition-colors",
          compact
            ? "h-9 w-9 sm:h-14 sm:w-14"
            : "h-14 w-14",
          selected
            ? "border-gold-dark bg-gold/15 text-gold-dark"
            : "border-parchment-border text-ink-muted group-hover:border-gold-dark group-hover:text-gold-dark"
        )}
      >
        {icon}
      </div>
      <span
        className={cn(
          "font-medieval text-center leading-tight",
          compact ? "text-[10px] sm:text-base" : "text-base",
          selected ? "text-gold-dark" : "text-ink"
        )}
      >
        {label}
      </span>
      {description && (
        <span
          className={cn(
            "text-center leading-snug text-ink-muted",
            compact ? "hidden text-[10px] sm:block sm:text-xs" : "text-xs"
          )}
        >
          {description}
        </span>
      )}
    </button>
  );
}
