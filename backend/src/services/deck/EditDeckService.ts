import prismaClient from "../../config/database";
import { EditDeckProps } from "./types";

class EditDeckService {
  async execute({ id, title }: EditDeckProps) {
    if (!id) {
      throw new Error("Solicitaçao invalida");
    }

    const findDeck = await prismaClient.deck.findFirst({
      where: {
        id: id,
      },
    });

    if (!findDeck) {
      throw new Error("Deck não existe");
    }

    await prismaClient.deck.update({
      where: { id: findDeck.id },
      data: {
        title: title,
      },
    });

    return { message: "Editado com sucesso" };
  }
}

export { EditDeckService };
