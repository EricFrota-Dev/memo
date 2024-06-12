import { useState } from "react";
import getDecks from "../../services/requests/deckReq/getDecks";
import deleteDeck from "../../services/requests/deckReq/deleteDeck/deleteDeck";
import editDeck from "../../services/requests/deckReq/editDeck/editDeck";
import createDeck from "../../services/requests/deckReq/createDeck";
import createCard from "../../services/requests/cardReq/createCard";
import getCards from "../../services/requests/cardReq/getCards";
import editCard from "../../services/requests/cardReq/editCard";
import deleteCard from "../../services/requests/cardReq/deleteCard";
import { CardProps, MessageProps, OpenModalProps } from "./types";
import useQuery from "../useQuery";
import useMutation from "../useMutation";
import {
  initialMessageProps,
  successMessage,
  errorMessage,
} from "../../components/Message/messages";

export const initialModalProps: OpenModalProps = {
  requestType: "add",
  isOpen: false,
  id: "",
  title: "",
  cardStatus: [],
};

function useDeck() {
  const [studing, setStuding] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");
  const [sort, setSort] = useState<string>("Asc");
  const [text, setText] = useState<string>("");
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [modalProps, setModalProps] =
    useState<OpenModalProps>(initialModalProps);
  const [cards, setCards] = useState<CardProps[]>([]);
  const [message, setMessage] = useState<MessageProps>(initialMessageProps);

  const closeModal = () => {
    setModalProps(initialModalProps);
  };

  const {
    data: decksData = [],
    isLoading: isLoadingDecks,
    revalidate,
  } = useQuery({
    request: () => getDecks({ search, filter }),
    keys: [search, filter],
  });

  const { mutate: handleGetCards, isLoading: isGettingCards } = useMutation({
    request: getCards,
    onSuccess: () => {},
    onError: (error) => setMessage(errorMessage(`${error}.`)),
  });

  const { mutate: handleCreateDeck, isLoading: isCreatingDeck } = useMutation({
    request: createDeck,
    onSuccess: () => {
      revalidate();
      closeModal();
      setMessage(successMessage("Deck adicionado com sucesso."));
    },
    onError: (error) => setMessage(errorMessage(`${error}.`)),
  });

  const { mutate: handleEditDeck, isLoading: isEditingDeck } = useMutation({
    request: editDeck,
    onSuccess: () => {
      revalidate();
      closeModal();
      setMessage(successMessage("Deck editado com sucesso."));
    },
    onError: (error) => setMessage(errorMessage(`${error}.`)),
  });

  const { mutate: handleDeleteDeck, isLoading: isDeleting } = useMutation({
    request: deleteDeck,
    onSuccess: () => {
      revalidate();
      closeModal();
      setMessage(successMessage("Deck excluído com sucesso."));
    },
    onError: (error) => setMessage(errorMessage(`Erro: ${error}.`)),
  });

  const { mutate: handleCreateCard, isLoading: isCreatingCard } = useMutation({
    request: createCard,
    onSuccess: () => {
      revalidate();
      closeModal();
      setMessage(successMessage("Card adicionado com sucesso."));
    },
    onError: (error) => setMessage(errorMessage(`${error}.`)),
  });

  const { mutate: handleEditCard, isLoading: isEditingCard } = useMutation({
    request: editCard,
    onSuccess: () => {
      revalidate();
    },
    onError: (error) => setMessage(errorMessage(`${error}.`)),
  });

  const { mutate: handleDeleteCard, isLoading: isDeletingCard } = useMutation({
    request: deleteCard,
    onSuccess: () => {
      revalidate();
      closeModal();
      setIsDeleted(true);
      setMessage(successMessage("Card deletado com sucesso."));
    },
    onError: (error) => setMessage(errorMessage(`${error}`)),
  });

  return {
    revalidate,
    closeModal,
    isDeleted,
    isCreatingDeck,
    isEditingCard,
    isDeletingCard,
    isCreatingCard,
    isDeleting,
    isEditingDeck,
    isLoadingDecks,
    handleDeleteDeck,
    handleCreateDeck,
    handleEditDeck,
    handleCreateCard,
    handleEditCard,
    handleDeleteCard,
    handleGetCards,
    isGettingCards,
    setSearch,
    setMessage,
    setFilter,
    setSort,
    setText,
    setStuding,
    setModalProps,
    setIsDeleted,
    message,
    text,
    modalProps,
    studing,
    cards,
    setCards,
    decksData,
    search,
    filter,
    sort,
    errorMessage,
  };
}

export default useDeck;
