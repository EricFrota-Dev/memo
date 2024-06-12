import { motion } from "framer-motion";

interface CardContentProps {
  word: string;
  translate: string;
  definition: string;
  example: string;
}

const CardContent = ({
  word,
  translate,
  definition,
  example,
}: CardContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 50,
      }}
      className={`top-36 py-10 absolute flex items-center flex-col justify-between w-5/6 h-72 bg-zinc-800 rounded-2xl border border-zinc-700  shadow-xl p-6 max-w-mid`}>
      <h1 className="font-bold text-2xl italic">"{translate}"</h1>
      <h2 className="font-bold text-wrap text-center">{definition}</h2>
      <p className="text-wrap font-thin italic text text-center">
        "
        {example.split(" ").map((term, index) =>
          term.toLocaleLowerCase().includes(word.toLocaleLowerCase()) ? (
            <strong key={`term-${index}`} className="text-cyan-400 font-bold">
              {" "}
              {term}
            </strong>
          ) : (
            " " + term
          )
        )}{" "}
        "
      </p>
    </motion.div>
  );
};

export default CardContent;
