import Deck from ".";
import useDeckContext from "../../hooks/useDeckContext";
import { AnimatePresence, motion } from "framer-motion";
import { DeckProps } from "../../services/requests/deckReq/deckInterfaces";
import Loading from "../Loading/Loading";

const rederDeckContent = (isLoading: boolean, sortedDecks: DeckProps[]) => {
  if (isLoading) return <Loading text="Carregando..." />;

  if (sortedDecks.length == 0)
    return (
      <div className="flex h-full justify-center items-center">
        Nenhum deck encontrado.
      </div>
    );

  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-between ">
        {sortedDecks.length > 0 ? (
          sortedDecks.map((deck) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={deck.id}
              className="w-full h-48 flex-2 rounded-xl border border-zinc-700 relative">
              <motion.li
                initial={{ opacity: 0, y: -8, x: 8 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -8, x: 8 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 50,
                }}>
                <Deck
                  id={deck.id}
                  title={deck.title}
                  cardStatus={deck.cardStatus}
                />
              </motion.li>
            </motion.div>
          ))
        ) : (
          <motion.h2
            initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: -20 }}
            key={`message${new Date()}`}>
            Nenhum deck encontrado...
          </motion.h2>
        )}
      </ul>
    </>
  );
};

function ShowDecks() {
  const { decksData, isLoadingDecks, sort } = useDeckContext();

  const sortedDecks = decksData.sort((a, b) =>
    sort === "Asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title)
  );

  return (
    <>
      <AnimatePresence>
        {rederDeckContent(isLoadingDecks, sortedDecks)}
      </AnimatePresence>
    </>
  );
}

export default ShowDecks;
