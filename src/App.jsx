import { Home } from "./pages/Home";
import { HeaderPartial } from "./partials/HeaderPartial";
import { 
    BrowserRouter, 
    Routes, 
    Route 
} from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <HeaderPartial />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minhas-pastas" element={<h1>Minhas pastas.</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
