import "./App.css";
// Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home/Home";
import Recipe from "./pages/Recipe/Recipe";
import Search from "./pages/Search/Search";
import Create from "./pages/Create/Create";
import NotFound from "./pages/NotFound/NotFound";
// Components
import NavBar from "./Components/NavBar/NavBar";
import ThemeSelector from "./Components/ThemeSelector/ThemeSelector";
// hooks
import UseTheme from "./hooks/UseTheme";
function App() {
  const { theme } = UseTheme();
  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <NavBar />
        <ThemeSelector />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Create" element={<Create />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
