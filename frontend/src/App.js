import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buyer from "./pages/buyer";
// import UserHeader from "./components/userHeader";
import JoinForm from "./pages/join";
import SignIn from "./pages/SignIn";
import User from "./pages/user";
import Gigs from "./pages/gigs";
import Creategigs from "./pages/creategigs";
import Postjob from "./components/postjob";
import MyPost from "./components/myPost";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/join" element={<JoinForm />} />
          <Route path="/user" element={<User />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/creategigs" element={<Creategigs />} />
          <Route path="/postajob" element={<Postjob />} />
          <Route path="/mypost" element={<MyPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
