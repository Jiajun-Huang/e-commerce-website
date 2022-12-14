import "./categories.styles.scss";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation";
import { Routes, Route } from "react-router-dom";
import Auth from "./routes/authentication/authentication.component";
import Shop from "./components/shop/shop.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="auth" element={<Auth />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
