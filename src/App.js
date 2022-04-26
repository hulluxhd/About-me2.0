import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";




function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
