import { useState } from "react";
import { FaArrowDownAZ, FaArrowDownZA } from "react-icons/fa6";
import useDeckContext from "../../hooks/useDeckContext";

function Filter() {
  const [change, setChange] = useState(true);
  const { filter, setFilter, setSort } = useDeckContext();

  const handleOrder = () => {
    if (change) {
      setSort("Dec");
    } else {
      setSort("Asc");
    }
    setChange(!change);
  };

  return (
    <>
      <div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-cyan-400 w-32 rounded h-8 child:bg-zinc-800">
          <option value="All">Todos</option>
          <option value="Under_Review">A Revisar</option>
          <option value="Revised">Revisados</option>
        </select>
      </div>
      <div>
        <button
          onClick={handleOrder}
          className="bg-cyan-400 w-8 rounded h-8 flex items-center justify-center">
          {change ? <FaArrowDownAZ size={20} /> : <FaArrowDownZA size={20} />}
        </button>
      </div>
    </>
  );
}

export default Filter;
