// src/routes/AppRouter.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../components/pages/LoginPage";
import { PostsPage } from "../components/pages/PostsPage";

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/posts" element={<PostsPage />} />
    </Routes>
  </BrowserRouter>
);
