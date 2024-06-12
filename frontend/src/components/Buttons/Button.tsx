import { motion } from "framer-motion";

export interface ButtonProps<T extends (...args: unknown[]) => unknown> {
  type: "default" | "cancel" | "cardButton" | "alternativeCardButton";
  onClick: T;
  text: string;
}

const Button = <T extends (...args: unknown[]) => unknown>({
  type,
  onClick,
  text,
}: ButtonProps<T>) => {
  const btnTypes = {
    default: "bg-transparent w-28 h-7 rounded-2xl",
    cancel: "bg-red-700 w-28 h-7 rounded-2xl",
    cardButton: "bg-cyan-600 w-40 h-14 rounded-[28px] mb-10",
    alternativeCardButton: "bg-red-700 w-40 h-14 rounded-[28px] mb-10",
  };

  const hoverTypes = {
    default: { type: { y: -2, backgroundColor: "#22d3ee" } },
    cancel: { type: { y: -2, backgroundColor: "rgb(220 38 38)" } },
    cardButton: { type: { y: -2, backgroundColor: "#22d3ee" } },
    alternativeCardButton: {
      type: { y: -2, backgroundColor: "rgb(220 38 38)" },
    },
  };

  return (
    <motion.button
      variants={hoverTypes[type]}
      whileHover="type"
      whileTap={{ scale: 0.9, opacity: 0.9 }}
      className={`flex justify-center items-center border shadow-sm shadow-zinc-900
       border-zinc-500 ${btnTypes[type]}`}
      onClick={onClick}>
      {text}
    </motion.button>
  );
};

export default Button;
