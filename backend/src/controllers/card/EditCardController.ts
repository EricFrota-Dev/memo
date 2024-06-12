import { FastifyRequest, FastifyReply } from "fastify";
import { EditCardService } from "../../services/card/EditCardService";
import { EditCardProps } from "../../services/card/types";

class EditCardController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { id, status } = req.body as EditCardProps;
    try {
      const cardService = new EditCardService();

      const card = await cardService.execute({ id, status });

      res.send(card);
    } catch (error) {
      res.status(500).send({ error: "Erro ao editar card" });
    }
  }
}

export { EditCardController };
