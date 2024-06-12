import { translatorApi } from "../../config/api";

const Translate = async (word: string) => {
  const res = await translatorApi.post(
    "/translate",
    {
      q: word,
      source: "en",
      target: "pt",
      format: "text",
    },
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return res.data;
};

export default Translate;
