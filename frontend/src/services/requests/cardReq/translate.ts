export async function translate(text: string) {
  const res = await fetch("https://translate.terraprint.co/translate", {
    method: "POST",
    body: JSON.stringify({
      q: text,
      source: "en",
      target: "pt",
      format: "text",
    }),
    headers: { "Content-Type": "application/json" },
  });
  const response = await res.json();
  return response.translatedText;
}
