import "./App.css";
import Home from "./Routes/Home";
import Package from "./Routes/Package";
import Book from "./Routes/Book";
import Service from "./Routes/Service";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/package" element={<Package />} />
        <Route path="/book" element={<Book />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
