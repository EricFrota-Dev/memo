import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateCardController } from "../controllers/card/CreateCardController";
import { ListCardController } from "../controllers/card/ListCardController";
import { DeleteCardController } from "../controllers/card/DeleteCardController";
import { EditCardController } from "../controllers/card/EditCardController";
import { BodyCardCreateReqProps } from "../services/card/types";

const DECK_ROUTE = "/card";

export async function cardRoutes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post<{ Body: BodyCardCreateReqProps }>(
    DECK_ROUTE,
    async (req, res) => {
      return new CreateCardController().handle(req, res);
    }
  );
  fastify.get(DECK_ROUTE, async (req: FastifyRequest, res: FastifyReply) => {
    return new ListCardController().handle(req, res);
  });
  fastify.delete(DECK_ROUTE, async (req: FastifyRequest, res: FastifyReply) => {
    return new DeleteCardController().handle(req, res);
  });
  fastify.put(DECK_ROUTE, async (req: FastifyRequest, res: FastifyReply) => {
    return new EditCardController().handle(req, res);
  });
}
