import { createContext, useState } from "react";

const NomeContext = createContext("undef");

function NomeDoUsuarioContext({ children }) {
  const [name, setName] = useState("");

  return (
    <NomeContext.Provider value={{ name, setName }}>
      {children}
    </NomeContext.Provider>
  );
}

export { NomeDoUsuarioContext, NomeContext };
