import { useState } from "react";
import useDeckContext from "../../../hooks/useDeckContext";
import Button from "../../Buttons/Button";
import Modal from "../Modal";
import { initialModalProps } from "../../../hooks/useDeck";
import { CreateCardProps } from "../../../services/requests/cardReq/types";
import Loading from "../../Loading/Loading";

const CreateCardModal = () => {
  const [text, setText] = useState<string>("");
  const { handleCreateCard, setModalProps, modalProps, isCreatingCard } =
    useDeckContext();
  const cardProps: CreateCardProps = {
    deck_id: modalProps.id,
    word: text,
  };

  async function handleClick() {
    await handleCreateCard(cardProps);
    setModalProps(initialModalProps);
  }

  return (
    <Modal onClose={() => setModalProps(initialModalProps)}>
      {!isCreatingCard ? (
        <>
          <h1 className="font-bold text-xl">
            Adicionar card ao deck "{modalProps.title}"
          </h1>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Digite uma palavra em inglês"
            className="rounded-md text-zinc-800 p-1 w-56"
            autoFocus
          />
          <div className="flex justify-between gap-3">
            <Button
              type="default"
              text="Adicionar"
              onClick={() => handleClick()}
            />
            <Button
              type="cancel"
              text="Cancelar"
              onClick={() => setModalProps(initialModalProps)}
            />
          </div>
        </>
      ) : (
        <Loading text="Criando..." />
      )}
    </Modal>
  );
};

export default CreateCardModal;
