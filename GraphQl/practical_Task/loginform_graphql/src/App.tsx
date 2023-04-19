import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Display from "./components/Display";
import { ToastContainer } from "react-toastify";
function App() {
  const tokenData = localStorage.getItem("token");
  console.log(tokenData);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>

          <Route path="/UserDashBord" element={<Display />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
