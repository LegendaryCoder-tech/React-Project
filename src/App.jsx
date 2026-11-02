import "./css/App.css";
// import MovieCard from './components/MovieCard'
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
