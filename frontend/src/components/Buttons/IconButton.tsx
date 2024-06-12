import { motion } from "framer-motion";

interface ItemButtonProps {
  size: "default" | "bigSize";
  variants: string;
  onClick: () => void;
  title: string;
}

const IconButton = ({
  onClick,
  children,
  variants,
  size,
  title,
}: React.PropsWithChildren<ItemButtonProps>) => {
  const sizePattern = {
    default: " h-7 w-7",
    bigSize: " h-10 w-10",
  };

  return (
    <motion.button
      title={title}
      whileHover={{ scale: 1.1, backgroundColor: "rgb(24 24 27)" }}
      whileTap={{ scale: 0.9, opacity: 0.9 }}
      onClick={onClick}
      className={`${
        variants + sizePattern[size]
      }  border border-zinc-700 shadow-sm shadow-zinc-900 flex justify-center items-center bg-zinc-800 rounded-full cursor-pointer`}>
      {children}
    </motion.button>
  );
};

export default IconButton;
