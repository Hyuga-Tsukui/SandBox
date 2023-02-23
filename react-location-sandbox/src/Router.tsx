import { ReactLocation, Router as RootRouter } from "@tanstack/react-location";
import { Home } from "./pages/Home";
import React from "react";
import { About } from "./pages/About";
import { Posts } from "./pages/Posts";
import { Post } from "./pages/Post";

type Props = {
  children: React.ReactNode;
};

const location = new ReactLocation();
export const Router: React.FC<Props> = ({ children }) => {
  return (
    <RootRouter
      location={location}
      routes={[
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "posts",
          children: [
            { path: "/", element: <Posts /> },
            { path: ":postId", element: <Post /> },
          ],
        },
      ]}
    >
      {children}
    </RootRouter>
  );
};
