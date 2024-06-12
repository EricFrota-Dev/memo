import { FastifyRequest, FastifyReply } from "fastify";
import { ListCardService } from "../../services/card/ListCardService";
class ListCardController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { deck_id } = req.query as { deck_id: string };
    const cardService = new ListCardService();

    const cards = await cardService.execute({ deck_id });

    res.send(cards);
  }
}

export { ListCardController };
