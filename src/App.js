import React from "react";
import PostsPage from "./pages/PostsPage";
import { Provider } from 'jotai';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <div>
      <Provider>
      <PostsPage />
      </Provider>
    </div>
  );
}
