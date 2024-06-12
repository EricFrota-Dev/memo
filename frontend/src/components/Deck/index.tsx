import DeckContent from "./DeckContent";

export interface DeckContentProps {
  id: string;
  title: string;
  cardStatus: number[];
}

const Deck = ({ id, title, cardStatus }: DeckContentProps) => {
  return (
    <div
      className="absolute w-full h-48 right-2 top-2 py-3 px-4 bg-gradient-to-t from-zinc-800 to-[#333333] rounded-xl
       shadow-xl">
      <DeckContent id={id} title={title} cardStatus={cardStatus} />
    </div>
  );
};

export default Deck;
