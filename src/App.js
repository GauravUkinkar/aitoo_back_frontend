import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./component/Header";
import Home from "./component/Home";

function App() {
  return(
    <>
  <BrowserRouter>
  <Header />
<Routes>
<Route path="/" element={<Home />} />

</Routes>
  </BrowserRouter>
    </>
  )
 
}

export default App;
