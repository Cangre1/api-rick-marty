import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import PersonajesTotales from "./personajesTotales";
import Personaje from "./personaje";

function App() {
  return (
    <div className="bg-blue-900 h-screen text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PersonajesTotales />}></Route>
          <Route path="/personaje/:id" element={<Personaje />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
