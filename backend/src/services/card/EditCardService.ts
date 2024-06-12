import prismaClient from "../../config/database";
import { UpdateDeckStatus } from "../deck/UpdateDeckStatusService";
import { EditCardProps } from "./types";

class EditCardService {
  async execute({ id, status }: EditCardProps) {
    if (!id || !status) {
      throw new Error("Solicitaçao invalida");
    }
    const findCard = await prismaClient.card.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCard) {
      throw new Error("Palavra não existe");
    }

    const updatedCard = await prismaClient.card.update({
      where: { id: findCard.id },
      data: {
        status: status,
      },
    });

    if (status == "Revised") {
      setTimeout(async () => {
        await prismaClient.card.update({
          where: { id: findCard.id },
          data: {
            status: "Under_Review",
          },
        });
        UpdateDeckStatus(findCard.deck_id);
      }, 60000);
    }
    UpdateDeckStatus(findCard.deck_id);

    return updatedCard;
  }
}

export { EditCardService };
