import { initialModalProps } from "../../../hooks/useDeck";
import useDeckContext from "../../../hooks/useDeckContext";
import Button from "../../Buttons/Button";
import Loading from "../../Loading/Loading";
import Modal from "../Modal";

const DeleteModal = () => {
  const {
    handleDeleteDeck,
    modalProps,
    setModalProps,
    handleDeleteCard,
    isDeleting,
  } = useDeckContext();

  async function handleClick(id: string) {
    if (modalProps.requestType === "delete_deck") {
      await handleDeleteDeck(id);
    } else {
      await handleDeleteCard(id);
    }
  }

  return (
    <Modal onClose={() => setModalProps(initialModalProps)}>
      {isDeleting ? (
        <Loading text="Deletando..." />
      ) : (
        <>
          <h1 className="font-bold text-xl">
            Deseja excluir "{modalProps.title}" da coleção?
          </h1>
          {modalProps.requestType === "delete_deck" && (
            <p className="text-red-500">
              *Todos os cards dentro serao perdidos*
            </p>
          )}
          <div className="flex justify-between gap-3">
            <Button
              type="default"
              text="Excluir"
              onClick={() => handleClick(modalProps.id)}
            />
            <Button
              type="cancel"
              text="Cancelar"
              onClick={() => setModalProps(initialModalProps)}
            />
          </div>
        </>
      )}
    </Modal>
  );
};

export default DeleteModal;
