import { FastifyRequest, FastifyReply } from "fastify";
import { CreateDeckService } from "../../services/deck/CreateDeckService";
import { ErrorProps } from "../../services/deck/types";

class CreateDeckController {
  deckService = new CreateDeckService();

  async handle(req: FastifyRequest, res: FastifyReply) {
    try {
      const { title } = req.body as { title: string };

      const deck = await this.deckService.execute({ title });

      res.send(deck);
    } catch (error: any) {
      if (error.message === "Titulo deve conter ao menos um caracter") {
        res.status(400).send({ error: error.message });
      } else if (error.message === "Deck com esse título já existe.") {
        res.status(409).send({ error: error.message });
      } else {
        res.status(500).send({ error: "Erro interno do servidor." });
      }
    }
  }
}

export { CreateDeckController };
