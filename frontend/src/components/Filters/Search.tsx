import { FormEvent, useRef } from "react";
import useDeckContext from "../../hooks/useDeckContext";
import { FiSearch } from "react-icons/fi";

function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setSearch, revalidate } = useDeckContext();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setSearch(inputRef.current!.value);
    e.preventDefault();
    revalidate();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="text-zinc-800 w-full max-w-72 pl-8 py-1 rounded"
          type="text"
          ref={inputRef}
          placeholder="Procurar Deck"
        />
        <button type="submit">
          <FiSearch className="absolute left-1 top-1 text-zinc-800 text-xl" />
        </button>
      </form>
    </div>
  );
}

export default Search;
