import prismaClient from "../../config/database";
import { FilterProps } from "./types";

class ListDeckServices {
  async execute({ search }: FilterProps) {
    const decks = await prismaClient.deck.findMany({
      where: {
        title: { contains: search },
      },
      orderBy: {
        title: "desc",
      },
    });
    return decks;
  }
}

export { ListDeckServices };
