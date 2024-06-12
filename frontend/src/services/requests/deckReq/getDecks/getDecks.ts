import { dataBaseApi } from "../../../api";
import { GetDeckProps, DeckProps } from "../deckInterfaces";

async function getDecks({ search, filter }: GetDeckProps) {
  const { data } = await dataBaseApi.get<DeckProps[]>("deck", {
    params: {
      search: search,
      filter: filter,
    },
  });

  return data;
}

export default getDecks;
