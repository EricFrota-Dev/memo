import prismaClient from "../../config/database";
import { UpdateDeckStatus } from "../deck/UpdateDeckStatusService";
import { CreateCardProps } from "./types";

class CreateCardService {
  async execute({
    deck_id,
    word,
    translate,
    example,
    definition,
  }: CreateCardProps) {
    try {
      const deck = await prismaClient.card.create({
        data: {
          deck_id,
          word,
          translate,
          example,
          definition,
        },
      });
      await UpdateDeckStatus(deck_id);

      return deck;
    } catch (error) {
      return error;
    }
  }
}

export { CreateCardService };
