import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PostProvider from "./context/provider/posts/posts.provider";
import UserProvider from "./context/provider/user/user.provider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <PostProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostProvider>
  </UserProvider>
);
