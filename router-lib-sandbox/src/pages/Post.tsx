import { useMatch } from "@tanstack/react-location";
import React from "react";

export const Post: React.FC = () => {
  const {
    params: { postId },
  } = useMatch();
  return (
    <div>
      <h1>{`Post ${postId}`}</h1>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        laudantium ea laborum est rem autem. Facilis nesciunt aut ipsam a optio
        ea, sapiente non alias doloribus, labore necessitatibus corrupti
        voluptatem.
      </article>
    </div>
  );
};
