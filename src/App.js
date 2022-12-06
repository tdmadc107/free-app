import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { connect } from "react-redux";
import Nav from "./component/view/Nav"
import Home from "./component/view/Home"

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default connect(App);
