import { useState } from "react";
import Card from "../componentes/Card";

export default function Search({ onSelect }) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="container">
      <h2>🎬 Buscar Series</h2>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Buscar</button>

      <div className="grid">
        {data.map((item, i) => (
          <Card key={i} item={item.show} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}