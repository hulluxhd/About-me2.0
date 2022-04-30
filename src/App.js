import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import InitialPageParallax from "./Pages/InitialPageParallax";

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<InitialPageParallax />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
