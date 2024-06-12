export interface OpenModalProps {
  requestType: "add" | "delete_deck" | "edit" | "delete_card" | "addCard";
  isOpen: boolean;
  id: string;
  title: string;
  cardStatus: number[];
}

export interface DeckProps {
  id: string;
  title: string;
  cardStatus: number[];
}

export interface EditDeckProps {
  id: string;
  title: string;
  cardStatus: number[];
}

export interface CardProps {
  example: string;
  definition: string;
  translate: string;
  id: string;
  word: string;
  deck_id: string;
  status: string;
}

export interface StudingProps {
  isStuding: boolean;
  deck_id: string;
}
export interface MessageProps {
  isVisible: boolean;
  type: "success" | "error" | "warning";
  text: string;
}
