import { useState } from "react";
import useDeckContext from "../../../hooks/useDeckContext";
import Button from "../../Buttons/Button";
import Modal from "../Modal";
import Loading from "../../Loading/Loading";

const CreateDeckModal = () => {
  const [title, setTitle] = useState<string>("");
  const { isCreatingDeck, handleCreateDeck, closeModal } = useDeckContext();

  async function handleClick(title: string) {
    await handleCreateDeck({ title });
  }

  return (
    <Modal onClose={() => closeModal()}>
      {!isCreatingDeck ? (
        <>
          <h1 className="font-bold text-xl">Adicionar novo Deck</h1>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Título do Deck"
            className="rounded-md text-zinc-800 p-1 w-48"
            autoFocus
          />
          <div className="flex justify-between gap-3">
            <Button
              type="default"
              text="Adicionar"
              onClick={() => handleClick(title.toLocaleLowerCase())}
            />
            <Button
              type="cancel"
              text="Cancelar"
              onClick={() => closeModal()}
            />
          </div>
        </>
      ) : (
        <Loading text="Criando..." />
      )}
    </Modal>
  );
};

export default CreateDeckModal;
