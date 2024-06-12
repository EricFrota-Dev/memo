import { initialModalProps } from "../../../hooks/useDeck";
import { EditDeckProps } from "../../../hooks/useDeck/types";
import useDeckContext from "../../../hooks/useDeckContext";
import Button from "../../Buttons/Button";
import Loading from "../../Loading/Loading";
import Modal from "../Modal";

const EditDeckModal = () => {
  const {
    handleEditDeck,
    modalProps,
    setModalProps,
    text,
    setText,
    isEditingDeck,
  } = useDeckContext();

  async function handleClick({ id, title, cardStatus }: EditDeckProps) {
    await handleEditDeck({ id, title, cardStatus });
  }

  return (
    <Modal onClose={() => setModalProps(initialModalProps)}>
      {!isEditingDeck ? (
        <>
          <h1 className="font-bold text-xl">Edição de Titulo</h1>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            defaultValue={modalProps.title}
            className="rounded-md text-zinc-800 p-1 w-48"
            autoFocus
          />

          <div className="flex justify-between gap-3">
            <Button
              type="default"
              text="Editar"
              onClick={() =>
                handleClick({
                  id: modalProps.id,
                  title: text,
                  cardStatus: modalProps.cardStatus,
                })
              }
            />
            <Button
              type="cancel"
              text="Cancelar"
              onClick={() => setModalProps(initialModalProps)}
            />
          </div>
        </>
      ) : (
        <Loading text="Editando..." />
      )}
    </Modal>
  );
};

export default EditDeckModal;
