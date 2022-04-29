import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import Login from "./Component/LoginAndSingUp/Login/Login";
import SingUp from "./Component/LoginAndSingUp/SignUp/SingUp";
import About from "./Component/Pages/About/About";
import Blogs from "./Component/Pages/Blogs/Blogs";
import Footer from "./Component/Shear/Footer/Footer";
import Header from "./Component/Shear/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Component/Pages/NotFound/NotFound";
import Inventory from "./Component/Pages/Inventory/Inventory";
import RequireAuth from "./RequireAuth/RequireAuth";

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
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
