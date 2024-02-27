import "./App.css";
import ROUTES from "./Constants/routes";
import { BrowserRouter as Router } from "react-router-dom"; // Use BrowserRouter as Router
import CustomRouter from "./router";

function App() {
  return (
    <Router>
      <CustomRouter routes={ROUTES} />
    </Router>
  );
}

export default App;
