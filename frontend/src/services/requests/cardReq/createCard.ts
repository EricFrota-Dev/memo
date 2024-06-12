import { AxiosResponse } from "axios";
import { dataBaseApi } from "../../api";
import { CardProps, CreateCardProps } from "./types";
// import { translate } from "./translate";

async function createCard({ deck_id, word }: CreateCardProps) {
  const response = await dataBaseApi.post<
    CreateCardProps,
    AxiosResponse<CardProps>
  >("/card", {
    deck_id: deck_id,
    word: word,
  });

  return response;
}

export default createCard;
