import { AnimatePresence } from "framer-motion";
import logo from "./assets/memo-logo.svg";
import Search from "./components/Filters/Search";
import Filter from "./components/Filters/Filter";
import ShowDecks from "./components/Deck/ShowDecks";
import useDeckContext from "./hooks/useDeckContext";
import { FaPlus } from "react-icons/fa";
import IconButton from "./components/Buttons/IconButton";
import CardContainer from "./components/Card/CardContainer";
import { ShowModal } from "./components/Modal/ShowModal";
import { initialModalProps } from "./hooks/useDeck";
import Message from "./components/Message/Message";

const App: React.FC = () => {
  const { modalProps, setModalProps, studing, message } = useDeckContext();

  return (
    <>
      <div
        className={`w-full min-h-screen bg-zinc-800 flex justify-center p-3 text-gray-200`}>
        <main className="w-full md:max-w-3xl min-h-screen flex-1 flex-col flex-wrap">
          <header className="w-full h-auto border-b border-gray-500 py-3 px-8 flex flex-col gap-4 ">
            <img src={logo} alt="Logo" className="w-24 my-2" />
            <div className="flex justify-between relative gap-8">
              <Search />
              <div className="flex space-x-4">
                <Filter />
              </div>
            </div>
          </header>

          <section className="m-10 bg-zinc-900 h-[40rem] rounded-2xl p-6 relative border border-zinc-700">
            <header className="flex justify-between items-center font-bold h-6 relative tansition-all overflow-visible">
              <h1 className="text-xl">LISTA DE DECKS</h1>
              <IconButton
                title="Criar um novo deck."
                size="bigSize"
                variants="text-xl text-cyan-400"
                onClick={() =>
                  setModalProps({
                    requestType: "add",
                    isOpen: true,
                    id: "",
                    title: "",
                    cardStatus: [],
                  })
                }>
                <FaPlus />
              </IconButton>
            </header>
            <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-thumb- scrollbar-track-transparent mt-8 p-3 h-[530px]">
              <div className="h-full">
                <ShowDecks />
              </div>
            </div>
            <AnimatePresence>{studing && <CardContainer />}</AnimatePresence>
          </section>
        </main>
      </div>
      <AnimatePresence>
        {modalProps.isOpen && (
          <div
            className={`text-white fixed inset-0 flex justify-center items-center w-full gap-4 visible bg-black/40`}
            onClick={() => setModalProps(initialModalProps)}>
            {<ShowModal />}
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>{message.isVisible && <Message />}</AnimatePresence>
    </>
  );
};

export default App;
