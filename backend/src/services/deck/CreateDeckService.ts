import prismaClient from "../../config/database";

interface CreateDeckProps {
  title: string;
}

class CreateDeckService {
  async execute({ title }: CreateDeckProps) {
    if (!title) {
      throw new Error("Titulo deve conter ao menos um caracter");
    }

    try {
      const deck = await prismaClient.deck.create({
        data: {
          title,
        },
      });
      return deck;
    } catch (error: any) {
      throw new Error("Erro interno do servidor.");
    }
  }
}

export { CreateDeckService };
