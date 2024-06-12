import prismaClient from "../../config/database";
import { UpdateDeckStatus } from "../deck/UpdateDeckStatusService";
import { DeleteCardProps } from "./types";

class DeleteCardService {
  async execute({ id }: DeleteCardProps) {
    if (!id) {
      throw new Error("Solicitaçao invalida");
    }

    const findCard = await prismaClient.card.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCard) {
      throw new Error("Palavra não existe");
      return;
    }

    await prismaClient.card.delete({
      where: {
        id: findCard.id,
      },
    });
    UpdateDeckStatus(findCard.deck_id);
    return { message: "Deletado com sucesso" };
  }
}

export { DeleteCardService };
