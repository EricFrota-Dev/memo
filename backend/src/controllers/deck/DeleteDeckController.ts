import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteDeckService } from "../../services/deck/DeleteDeckService";

class DeleteDeckController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { id } = req.query as { id: string };
    const deckService = new DeleteDeckService();

    const deck = await deckService.execute({ id });

    res.send(deck);
  }
}

export { DeleteDeckController };
