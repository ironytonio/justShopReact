import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListining";
import ProductDetails from "./components/ProductDetails";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />{" "}
          <Route path="/product/:productId" element={<ProductDetails />} />{" "}
          <Route path="/basket" element={<Basket/>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          {/* "*" означає любий елемент (в випадку якщо не спраюють інші то буду він)*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
