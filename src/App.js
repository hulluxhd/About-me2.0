import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import {NomeDoUsuarioContext} from "./context/NomeContext";
import Home from "./Pages/Home";

function App() {
  return (
   
      <NomeDoUsuarioContext>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </NomeDoUsuarioContext>
   
  );
}

export default App;
