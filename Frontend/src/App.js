import { useState } from "react";
import Login from "./componentes/Login";
import Search from "./pantallas/Search";
import Details from "./pantallas/Details";

function App() {
  const [screen, setScreen] = useState("login");
  const [selected, setSelected] = useState(null);

  if (screen === "login") {
    return <Login onLogin={() => setScreen("search")} />;
  }

  if (screen === "search") {
    return (
      <Search
        onSelect={(item) => {
          setSelected(item);
          setScreen("details");
        }}
      />
    );
  }

  if (screen === "details") {
    return (
      <Details
        item={selected}
        onBack={() => setScreen("search")}
      />
    );
  }
}

export default App;