import { useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../features/Home";
import Navigation from "../features/Navigation";
import { Row } from "../components/Common";
import About from "../features/About";
import { StockContext } from "./context";
import { COMPANY_DEFAULT, stockFormReducer } from "../hooks/stockFormReducer";
import KlineChart from "../features/KlineChart";

function App() {
  const [stockFormData, dispatch] = useReducer(
    stockFormReducer,
    COMPANY_DEFAULT
  );

  const stockProviderValue = { state: stockFormData, dispatch };

  return (
    <Router>
      <Navigation />
      <Row>
        <StockContext.Provider value={stockProviderValue}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<KlineChart />} />
          </Routes>
        </StockContext.Provider>
      </Row>
    </Router>
  );
}

export default App;
