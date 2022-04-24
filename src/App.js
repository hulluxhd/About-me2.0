import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import InitialPageParallax from "./Pages/InitialPageParallax";


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
