import { motion } from "framer-motion";

export interface LoadingText {
  text: string;
}
interface AnimateLetterProps {
  letter: string;
  delay: number;
}

const AnimatedLetter = ({ letter, delay }: AnimateLetterProps) => (
  <motion.span
    animate={{ y: [0, -2, 1, 0] }}
    transition={{
      duration: 0.4,
      repeat: Infinity,
      repeatDelay: 0.6,
      ease: "easeInOut",
      delay: delay,
    }}>
    {letter}
  </motion.span>
);

const Loading = ({ text }: LoadingText) => {
  return (
    <motion.div
      className="flex font-bold"
      initial={{ opacity: 0, y: -8, x: 8 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -8, x: 8 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
      }}>
      {text.split("").map((letter, index) => (
        <AnimatedLetter key={index} letter={letter} delay={index * 0.05} />
      ))}
    </motion.div>
  );
};

export default Loading;
