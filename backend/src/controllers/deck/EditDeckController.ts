import { FastifyRequest, FastifyReply } from "fastify";
import { EditDeckService } from "../../services/deck/EditDeckService";

class EditDeckController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { id, title, cardStatus } = req.body as {
      id: string;
      title: string;
      cardStatus: number[];
    };
    try {
      const deckService = new EditDeckService();

      const deck = await deckService.execute({ id, title, cardStatus });

      res.send(deck);
    } catch (error) {
      res.status(500).send({ error: "Erro ao editar card" });
    }
  }
}

export { EditDeckController };
