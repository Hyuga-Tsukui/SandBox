import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { Posts } from "./pages/Posts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
        children: [
          {
            path: ":postId",
            element: <Post />,
          },
        ],
      },
      // {
      //   path: "posts/:postId",
      //   element: <Post />,
      // },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
