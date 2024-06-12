export interface CreateCardProps {
  deck_id: string;
  word: string;
  translate: string;
  example: string;
  definition: string;
}

export interface BodyCardCreateReqProps {
  deck_id: string;
  word: string;
}
export interface EditCardProps {
  id: string;
  status: "New" | "Revised" | "Under_Review";
}

export interface ListCardId {
  deck_id: string;
}
export interface DeleteCardProps {
  id: string;
}
export interface Definition {
  definition: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
}
