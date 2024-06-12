import prismaClient from "../../config/database";
import { ListCardId } from "./types";

class ListCardService {
  async execute({ deck_id }: ListCardId) {
    const cards = await prismaClient.card.findMany({
      where: {
        deck_id: deck_id,
        status: { in: ["Under_Review", "New"] },
      },
    });

    return cards;
  }
}

export { ListCardService };
