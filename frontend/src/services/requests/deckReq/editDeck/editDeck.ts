import { AxiosResponse } from "axios";
import { dataBaseApi } from "../../../api";
import { DeckProps, EditDeckProps } from "../deckInterfaces";

async function editDeck({ id, title, cardStatus }: EditDeckProps) {
  await dataBaseApi.put<EditDeckProps, AxiosResponse<DeckProps>>("deck", {
    id,
    title,
    cardStatus,
  });
}

export default editDeck;
