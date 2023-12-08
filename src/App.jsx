import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BookPage from "./components/BookPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/:pageId" element={<BookPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
