import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../features/pages/Home";
import Navigation from "../components/Navigation";
import { Row } from "../components/Common";
import About from "../features/pages/About";
import KlineChart from "../features/crypto/components/KlineChart";
import { CryptoProvider } from "../features/crypto/provider";
import ExchangeInfo from "../features/crypto/components/ExchangeInfo";

function App() {
  return (
    <Router>
      <Navigation />
      <Row>
        <CryptoProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/kline" element={<KlineChart />} />
            <Route path="/exchange-info" element={<ExchangeInfo />} />
          </Routes>
        </CryptoProvider>
      </Row>
    </Router>
  );
}

export default App;
