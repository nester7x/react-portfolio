import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "screens/Home";
import Works from "screens/Works";
import About from "screens/About";
import NotFound from "screens/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/about" element={<About />} />
      <Route path="/not-found-404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found-404" />} />
    </Routes>
  );
}

export default AppRoutes;
