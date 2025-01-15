import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Apply from "./pages/Apply";
import ClientPortal from "./pages/ClientPortal";
import Repayments from "./pages/Repayments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/portal" element={<ClientPortal />}>
          <Route path="repayments" element={<Repayments />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;