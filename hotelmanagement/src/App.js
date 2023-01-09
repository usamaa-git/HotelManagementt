import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./Pages/HomePage/Home";
import { Hotel } from "./Pages/Hotels/Hotel";
import { List } from "./Pages/List/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotel/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
