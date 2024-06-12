import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCardService } from "../../services/card/CreteCardService";
import { BodyCardCreateReqProps, Meaning } from "../../services/card/types";
import { dictionaryApi } from "../../config/api";
import Translate from "../../services/card/Translate";

function findDefinition(meanings: Meaning[]): string {
  for (const meaning of meanings) {
    for (const def of meaning.definitions) {
      if (def?.definition) {
        return def.definition;
      }
    }
  }
  return "Definição não encontrada.";
}

function findExample(meanings: Meaning[]): string {
  for (const meaning of meanings) {
    for (const def of meaning.definitions) {
      if (def?.example) {
        return def.example;
      }
    }
  }
  return "Exemplo não encontrado.";
}

class CreateCardController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { deck_id, word } = req.body as BodyCardCreateReqProps;
    try {
      const cardService = new CreateCardService();
      const wordProps = await dictionaryApi.get(`/${word}`);
      const { meanings } = wordProps.data[0];
      console.log(meanings);
      const definition = findDefinition(meanings);
      const example = findExample(meanings);
      const { translatedText } = await Translate(word);
      const translate = translatedText;
      const card = await cardService.execute({
        deck_id,
        word,
        definition,
        example,
        translate,
      });

      res.send(card);
    } catch (error) {
      const { word } = req.body as BodyCardCreateReqProps;
      console.error("Erro ao criar card:", word);
      res.status(500).send({ error: "Erro ao criar card", word });
    }
  }
}

export { CreateCardController };
