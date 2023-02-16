import React from "react";
import { useParams } from "react-router-dom";

export const Post: React.FC = () => {
  const { postId } = useParams();
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
