import Fastify from "fastify";
import cors from "@fastify/cors";
import { deckRoutes } from "./routes/deckRoutes";
import { cardRoutes } from "./routes/cardRoutes";

const app = Fastify({ logger: true });

app.setErrorHandler((err, req, res) => {
  res.code(400).send({ massege: err.message });
});

const start = async () => {
  await app.register(cors);
  await app.register(deckRoutes, cardRoutes);

  try {
    await app.listen({ port: 3333 });
  } catch (err) {
    process.exit(1);
  }
};

start();
