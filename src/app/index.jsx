import { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../features/Home";
import Navigation from "../features/Navigation";
import { Row } from "../components/Common";
import About from "../features/About";
import { CryptoContext } from "./context";
import { CRYPTO_DEFAULT, cryptoFormReducer } from "../hooks/cryptoFormReducer";
import KlineChart from "../features/KlineChart";

function App() {
  const [cryptoFormData, dispatch] = useReducer(
    cryptoFormReducer,
    CRYPTO_DEFAULT
  );

  const cryptoProviderValue = { state: cryptoFormData, dispatch };

  return (
    <Router>
      <Navigation />
      <Row>
        <CryptoContext.Provider value={cryptoProviderValue}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<KlineChart />} />
          </Routes>
        </CryptoContext.Provider>
      </Row>
    </Router>
  );
}

export default App;
