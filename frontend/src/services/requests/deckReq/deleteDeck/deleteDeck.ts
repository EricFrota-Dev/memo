import { AxiosResponse } from "axios";
import { dataBaseApi } from "../../../api";
import { DeckProps, CreateDeckProps } from "../deckInterfaces";

async function deleteDeck(id: string) {
  await dataBaseApi.delete<CreateDeckProps, AxiosResponse<DeckProps>>("deck", {
    params: {
      id: id,
    },
  });
}

export default deleteDeck;
