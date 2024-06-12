import useDeckContext from "../../hooks/useDeckContext";
import {
  CreateCardModal,
  CreateDeckModal,
  DeleteModal,
  EditDeckModal,
} from "./modalTypes";

export const ShowModal = () => {
  const {
    modalProps: { requestType },
  } = useDeckContext();

  const chooseModal = {
    delete_deck: <DeleteModal />,
    edit: <EditDeckModal />,
    add: <CreateDeckModal />,
    addCard: <CreateCardModal />,
    delete_card: <DeleteModal />,
  };

  return chooseModal[requestType];
};
