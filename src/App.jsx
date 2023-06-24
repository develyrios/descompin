import { Home } from "./pages/Home";
import { MinhasPastasPage } from "./pages/MinhasPastas";
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
        <Route path="/minhas-pastas" element={<MinhasPastasPage />} />
      </Routes>
    </BrowserRouter>
  )
}
