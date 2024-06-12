import prismaClient from "../../config/database";

interface DeleteDeckProps {
  id: string;
}

class DeleteDeckService {
  async execute({ id }: DeleteDeckProps) {
    if (!id) {
      throw new Error("Solicitaçao invalida");
    }

    const findDeck = await prismaClient.deck.findFirst({
      where: {
        id: id,
      },
    });

    if (!findDeck) {
      throw new Error("Palavra não existe");
    }

    await prismaClient.card.findMany({
      where: { deck_id: id },
    });

    await prismaClient.card.deleteMany({
      where: { deck_id: id },
    });

    await prismaClient.deck.delete({
      where: {
        id: findDeck.id,
      },
    });

    return { message: "Card deletado com sucesso" };
  }
}

export { DeleteDeckService };
