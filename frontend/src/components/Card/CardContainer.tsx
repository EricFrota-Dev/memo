import { LiaUndoSolid } from "react-icons/lia";
import useDeckContext from "../../hooks/useDeckContext";
import CardContent from "./CardContent";
import { useEffect, useState } from "react";
import ResumoCard from "./ResumoCard";
import { AnimatePresence, motion } from "framer-motion";
import IconButton from "../Buttons/IconButton";
import Button from "../Buttons/Button";
import PorcentageBar from "./PorcentageBar";
import { FaTrash } from "react-icons/fa6";
import { EditCardProps } from "../../services/requests/cardReq/editCard";

const CardContainer = () => {
  const [count, setCount] = useState<number>(0);
  const {
    cards,
    setStuding,
    handleEditCard,
    revalidate,
    setModalProps,
    isDeleted,
    setIsDeleted,
  } = useDeckContext();
  const [onShow, setOnShow] = useState<boolean>(false);
  const [porcentage, setPorcentage] = useState<number>(0);

  const getPorcentage = () => {
    return 100 / cards.length;
  };

  const handleClickShow = () => {
    setOnShow(true);
  };

  const handleClickEasy = async () => {
    const editEasyProps: EditCardProps = {
      id: cards[count].id,
      status: "Revised",
    };
    await handleEditCard(editEasyProps);
    setPorcentage(porcentage + getPorcentage());
    setOnShow(false);
    setCount(count + 1);
  };

  const handleClickHard = () => {
    const editHardProps: EditCardProps = {
      id: cards[count].id,
      status: "Under_Review",
    };
    handleEditCard(editHardProps);
    const card = cards[count];
    cards.splice(count, 1);
    cards.push(card);
    setOnShow(false);
  };

  const handleExit = async () => {
    setStuding(false);
    await revalidate();
  };

  const handleDelete = () => {
    setModalProps({
      requestType: "delete_card",
      isOpen: true,
      id: cards[count].id,
      title: cards[count].word,
      cardStatus: [],
    });
  };
  useEffect(() => {
    if (isDeleted) {
      cards.splice(count, 1);
      setIsDeleted(false);
    }
  }, [cards, count, isDeleted, setIsDeleted]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, x: 8 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -8, x: 8 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
      }}
      className="-top-7 -right-7 w-full absolute m-10 bg-zinc-900 h-full rounded-2xl p-6 shadow-xl border border-zinc-800 flex flex-col items-center justify-between pt-20">
      <IconButton
        title=""
        size="bigSize"
        variants="absolute right-8 top-7 text-2xl text-cyan-500"
        onClick={() => handleExit()}>
        <LiaUndoSolid />
      </IconButton>
      {count < cards.length ? (
        <IconButton
          title=""
          size="bigSize"
          variants="absolute left-8 top-7 text-xl text-red-500"
          onClick={() => handleDelete()}>
          <FaTrash />
        </IconButton>
      ) : (
        ""
      )}
      <AnimatePresence>
        <div className="relactive h-72 flex flex-col items-center">
          {count < cards.length && (
            <h1 className="text-3xl font-bold shadow-xl transition-all">
              "{cards[count].word}"
            </h1>
          )}
          {count < cards.length ? (
            onShow ? (
              <CardContent
                key={`content-${cards[count].id}`}
                word={cards[count].word}
                translate={cards[count].translate}
                definition={cards[count].definition}
                example={cards[count].example}
              />
            ) : (
              <h1 key={`question-${count + 2}`}>Qual o significado?</h1>
            )
          ) : (
            <div className="h-full flex items-center">
              <ResumoCard key="summary" />
            </div>
          )}
        </div>{" "}
      </AnimatePresence>
      <PorcentageBar reference={porcentage} />

      {count < cards.length ? (
        onShow ? (
          <div className="flex gap-3">
            <Button
              text="Difícil"
              type="alternativeCardButton"
              onClick={handleClickHard}
            />
            <Button text="Fácil" type="cardButton" onClick={handleClickEasy} />
          </div>
        ) : (
          <Button
            type="cardButton"
            text="Mostrar Significado"
            onClick={handleClickShow}
          />
        )
      ) : (
        <Button type="cardButton" text="Sair" onClick={() => handleExit()} />
      )}
    </motion.div>
  );
};

export default CardContainer;
