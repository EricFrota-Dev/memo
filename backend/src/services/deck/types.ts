export interface FilterProps {
  search: string;
  filter: "All" | "Under_Review" | "Revised";
}

export interface ErrorProps {
  message: "Titulo deve conter ao menos um caracter" | "Erro ao criar deck.";
}
export interface EditDeckProps {
  id: string;
  title: string;
  cardStatus: number[];
}
export interface CardProps {
  status: string;
}

export interface CardUpdateProps {
  deck_id: string;
}
