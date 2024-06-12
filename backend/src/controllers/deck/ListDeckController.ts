import { FastifyRequest, FastifyReply } from "fastify";
import { ListDeckServices } from "../../services/deck/ListDeckServeice";
import { FilterProps } from "../../services/deck/types";

class ListDeckController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { search, filter } = req.query as FilterProps;
    const listDeckServices = new ListDeckServices();
    const decks = await listDeckServices.execute({ search, filter });
    const filtredDecks = decks.filter(({ cardStatus }) => {
      switch (filter) {
        case "All":
          return cardStatus;
        case "Under_Review":
          return cardStatus[1] > 0 || cardStatus[0] > 0;
        case "Revised":
          return cardStatus[0] == 0 && cardStatus[1] == 0 && cardStatus[2] > 0;
        default:
          break;
      }
    });
    res.send(filtredDecks);
  }
}

export { ListDeckController };
