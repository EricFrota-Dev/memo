import { AxiosResponse } from "axios";
import { dataBaseApi } from "../../../api";
import { DeckProps, CreateDeckProps } from "../deckInterfaces";

async function createDeck(body: CreateDeckProps) {
  const response = await dataBaseApi.post<
    CreateDeckProps,
    AxiosResponse<DeckProps>
  >("/deck", body);

  return response.data;
}

export default createDeck;
