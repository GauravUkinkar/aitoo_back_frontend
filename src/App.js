import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./component/Header";
import Home from "./component/Home";
import MainTable from "./component/viewdata/MainTable";
import { ToastContainer } from "react-toastify";

function App() {
  return(
    <>
  <BrowserRouter>
  <Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/viewall" element={<MainTable /> } />

</Routes>
  </BrowserRouter>
  <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
 
}

export default App;
