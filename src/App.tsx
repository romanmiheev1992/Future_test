import { Routes, Route } from "react-router-dom";
import './App.css';
import { BookCard } from './Components/BookCard/BookCard';
import { BookPage } from "./Components/BookPage/BookPage";
import { HeaderSection } from './Components/HeaderSection/HeaderSection';



function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <Routes>
        <Route path="/" element={<BookCard/>}/>
          <Route path="/:id" element={<BookPage/>}/>
      </Routes>
    </div>
  );
}

export default App ;
