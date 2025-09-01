import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import State from "./pages/State";
import AuthPage from "./pages/LoginPage";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/state" element={<State />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </section>
  );
}

export default App;
