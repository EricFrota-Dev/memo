import { motion } from "framer-motion";
import useDeckContext from "../../hooks/useDeckContext";
import { useEffect } from "react";
import { initialMessageProps } from "./messages";

const Message = () => {
  const { message, setMessage } = useDeckContext();

  const barColor = {
    success: "bg-green-400",
    warning: "bg-yello-400",
    error: "bg-red-400",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(initialMessageProps);
    }, 4000);

    return () => clearTimeout(timer);
  }, [message, setMessage]);
  return (
    <div className="fixed left-1/2 -translate-x-1/2 top-1">
      <motion.div
        className="text-white bg-black max-w-md min-w-[200px] rounded-md w-fit"
        initial={{ translateY: -20, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        exit={{ translateY: -20, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 50,
        }}>
        <h1 className="bg-zinc-700 h-10 rounded-t-md px-3 flex justify-center items-center">
          {message.text}
        </h1>
        <div className="bg-zinc-700 rounded-b-md h-1">
          <motion.div
            className={`${barColor[message.type]} rounded-b-md h-1 w-full`}
            animate={{ width: ["100%", "0%"] }}
            transition={{ duration: 4 }}></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Message;
