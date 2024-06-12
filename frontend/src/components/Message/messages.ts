import { MessageProps } from "../../hooks/useDeck/types";

export const initialMessageProps: MessageProps = {
  isVisible: false,
  type: "warning",
  text: "",
};

export const successMessage = (text: string): MessageProps => {
  return {
    isVisible: true,
    type: "success",
    text: text,
  };
};
export const errorMessage = (text: string): MessageProps => {
  return {
    isVisible: true,
    type: "error",
    text: text,
  };
};
