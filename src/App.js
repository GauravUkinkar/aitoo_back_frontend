import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./component/Header";
import Home from "./component/Home";
import MainTable from "./component/viewdata/MainTable";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Login from "./component/login/Login";

function App() {
  const [islogin, setIslogin] = useState(
    localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    localStorage.setItem("auth", islogin ? "true" : "false");
  }, [islogin]);
  return(
    <>
  <BrowserRouter>
  {
    islogin &&
  <Header setIslogin={setIslogin} /> 

  }

<Routes>
<Route path="/login" element={<Login setIslogin={setIslogin} />} />
<Route path="/" element={<Home />} />
<Route path="/viewall" element={<MainTable /> } />

</Routes>
  </BrowserRouter>
  <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
 
}

export default App;
