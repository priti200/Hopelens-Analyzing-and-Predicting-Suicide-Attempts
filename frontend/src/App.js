import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preview from "./components/Preview";
import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/preview" element={<Preview />} />
      </Routes>
      <Footer />
    </>
    
  );
};

export default App;
