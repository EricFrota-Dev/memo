export interface CreateCardProps {
  deck_id: string;
  word: string;
}
export interface CardProps {
  deck_id: string;
  translate: string;
  id: string;
  word: string;
  example: string;
  definition: string;
  status: string;
  created_at: string;
  updated_at: string;
}
