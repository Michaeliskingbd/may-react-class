import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import State from "./pages/State";
import AuthPage from "./pages/LoginPage";
import TodoApp from "./pages/Todo";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/authpage";
import SingleProductPage from "./pages/SingleProductPage";
import SinglePostPage from "./pages/SinglePostPage";
import Error from "./pages/Error";
import Counter from "./pages/Counter";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/state" element={<State />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </section>
  );
}

export default App;
