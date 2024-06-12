import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateDeckController } from "../controllers/deck/CreateDeckController";
import { ListDeckController } from "../controllers/deck/ListDeckController";
import { DeleteDeckController } from "../controllers/deck/DeleteDeckController";
import { EditDeckController } from "../controllers/deck/EditDeckController";

const DECK_ROUTE = "/deck";

export async function deckRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post(DECK_ROUTE, async (req: FastifyRequest, res: FastifyReply) => {
    return new CreateDeckController().handle(req, res);
  });
  fastify.get(DECK_ROUTE, async (req: FastifyRequest, res: FastifyReply) => {
    return new ListDeckController().handle(req, res);
  });
  fastify.delete(DECK_ROUTE, async (req: FastifyRequest, res: FastifyReply) => {
    return new DeleteDeckController().handle(req, res);
  });
  fastify.put(DECK_ROUTE, async (req: FastifyRequest, res: FastifyReply) => {
    return new EditDeckController().handle(req, res);
  });
}
