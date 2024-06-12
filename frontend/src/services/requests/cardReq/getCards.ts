import { dataBaseApi } from "../../api";
import { CardProps } from "./types";

async function getCards(deck_id: string) {
  const cards = await dataBaseApi.get<CardProps[]>(`card`, {
    params: {
      deck_id: deck_id,
    },
  });
  return cards.data;
}

export default getCards;
