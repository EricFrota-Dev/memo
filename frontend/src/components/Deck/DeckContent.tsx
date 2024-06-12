import { FaPlus, FaTrash } from "react-icons/fa6";
import useDeckContext from "../../hooks/useDeckContext";
import IconButton from "../Buttons/IconButton";
import { MdEdit } from "react-icons/md";
import Button from "../Buttons/Button";
import { DeckContentProps } from ".";

const DeckContent: React.FC<DeckContentProps> = ({ id, title, cardStatus }) => {
  const {
    setModalProps,
    handleGetCards,
    setCards,
    setMessage,
    errorMessage,
    setStuding,
  } = useDeckContext();

  async function handleStudy(id: string) {
    const cards = await handleGetCards(id);
    if (cards && cards.length !== 0) {
      setCards(cards);
      setStuding(true);
    } else {
      setMessage(errorMessage("Sem cards a serem estudados."));
    }
  }

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="w-full flex justify-end gap-2 child:text-sm child:cursor-pointer child:opacity-80">
        <IconButton
          title="Adicionar card ao deck."
          size="default"
          variants="text-sm text-cyan-400"
          onClick={() =>
            setModalProps({
              requestType: "addCard",
              isOpen: true,
              id: id,
              title: title,
              cardStatus: cardStatus,
            })
          }>
          <FaPlus />
        </IconButton>
        <IconButton
          title="Editar titulo do deck."
          size="default"
          variants="text-sm text-cyan-400"
          onClick={() =>
            setModalProps({
              requestType: "edit",
              isOpen: true,
              id: id,
              title: title,
              cardStatus: cardStatus,
            })
          }>
          <MdEdit />
        </IconButton>
        <IconButton
          title="Excluir deck."
          size="default"
          variants="text-sm text-red-500"
          onClick={() =>
            setModalProps({
              requestType: "delete_deck",
              isOpen: true,
              id: id,
              title: title,
              cardStatus: cardStatus,
            })
          }>
          <FaTrash />
        </IconButton>
      </div>
      <div className="font-bold w-full border-b border-zinc-500 h-8 flex items-center capitalize">
        {title}
      </div>
      <div className="child:flex child:justify-between child:text-sm child:mb-1">
        <div>
          <p>Novos:</p>
          <p className="text-blue-400">{cardStatus[0]}</p>
        </div>
        <div>
          <p>Revisar:</p>
          <p className="text-red-400">{cardStatus[1]}</p>
        </div>
        <div>
          <p>Na mente:</p>
          <p className="text-green-400">{cardStatus[2]}</p>
        </div>
      </div>
      <div className="flex justify-center align-middle">
        <Button text="Estudar" type="default" onClick={() => handleStudy(id)} />
      </div>
    </div>
  );
};

export default DeckContent;
