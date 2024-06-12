import useDeck from "../hooks/useDeck";
import { DeckProvider } from "../hooks/useDeckContext";

function Provider({ children }: React.PropsWithChildren) {
  const deck = useDeck();

  return <DeckProvider value={deck}>{children}</DeckProvider>;
}

export default Provider;
