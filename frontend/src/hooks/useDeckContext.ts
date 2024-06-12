import { createContext, useContext } from "react";
import useDeck from "./useDeck";

const DeckContext = createContext({} as ReturnType<typeof useDeck>);

export const DeckProvider = DeckContext.Provider;

export default function useDeckContext() {
  const context = useContext(DeckContext);

  return context;
}
