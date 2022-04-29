import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import Login from "./Component/LoginAndSingUp/Login/Login";
import SingUp from "./Component/LoginAndSingUp/SignUp/SingUp";
import About from "./Component/Pages/About/About";
import Blogs from "./Component/Pages/Blogs/Blogs";
import Footer from "./Component/Shear/Footer/Footer";
import Header from "./Component/Shear/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SingUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
