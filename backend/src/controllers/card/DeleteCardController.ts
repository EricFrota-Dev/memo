import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCardService } from "../../services/card/DeleteCardService";

class DeleteCardController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { id } = req.query as { id: string };
    const cardService = new DeleteCardService();

    const card = await cardService.execute({ id });

    res.send(card);
  }
}

export { DeleteCardController };
