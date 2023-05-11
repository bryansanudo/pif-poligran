import Header from "@/components/header/Header";
import Register from "@/components/Register";
import Login from "@/components/Login";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import UserProfile from "@/components/userProfile/UserProfile";
import Spents from "@/components/spents/Spents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configFirebase";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [user, setUser] = useState(false);
  const [labelEmail, setLabelEmail] = useState("");
  const [uidUser, setUidUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
        setLabelEmail(user.email);
        setUidUser(user.uid);
      } else {
        setLabelEmail("");
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <ToastContainer position="bottom-center" />
        <Header user={user} setUser={setUser} labelEmail={labelEmail} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/spents"
            element={<Spents uidUser={uidUser} labelEmail={labelEmail} />}
          />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
