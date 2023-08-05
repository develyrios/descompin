import { Home } from "./pages/Home";
import { MinhasPastasPage } from "./pages/MinhasPastas";
import { HeaderPartial } from "./partials/HeaderPartial";
import { 
    BrowserRouter, 
    Routes, 
    Route 
} from "react-router-dom";
import { AppContext } from "./store/AppContext";
import GlobalStyle from "./GlobalStyle";

const initialState = {
  activePinId: null,
  mode: null,
  folders: [],
  type: null,
  pins: [],
}

export const App = () => {
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
      <div className="App">
        <AppContext initialState={initialState}>

          <HeaderPartial />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/minhas-pastas" element={<MinhasPastasPage />} />
          </Routes>

        </AppContext>
      </div>
    </BrowserRouter>
    </>
  )
}
