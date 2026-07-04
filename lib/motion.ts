import type { Transition, Variants } from "framer-motion";

export const easeOut: Transition["ease"] = [0.25, 0.1, 0.25, 1];

export const stepTransition: Transition = {
  type: "tween",
  ease: easeOut,
  duration: 0.35,
};

export const stepVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -48 : 48,
    opacity: 0,
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: easeOut },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

export const cardRevealVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.12,
      duration: 0.55,
      ease: easeOut,
    },
  }),
};

export const springSnappy = {
  type: "spring" as const,
  stiffness: 420,
  damping: 28,
};

export const tapScale = { scale: 0.97 };
