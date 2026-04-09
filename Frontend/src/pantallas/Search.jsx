import { useState } from "react";
import { searchShows } from "../servicios/Api";
import Card from "../componentes/Card";

export default function Search({ onSelect }) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    const res = await searchShows(query);
    setData(res);
  };

  return (
    <div>
      <input
        placeholder="Buscar serie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>Buscar</button>

      <div className="grid">
        {data.map((item, i) => (
          <Card key={i} item={item.show} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}