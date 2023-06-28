import { Home } from "./pages/Home";
import { MinhasPastasPage } from "./pages/MinhasPastas";
import { HeaderPartial } from "./partials/HeaderPartial";
import { 
    BrowserRouter, 
    Routes, 
    Route 
} from "react-router-dom";
import { saveFolder, savePinInFolder } from "./services/pinService";

export const App = () => {
  // saveFolder('JavaScript');
  // savePinInFolder("13576-15ec8", "321pin");
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
