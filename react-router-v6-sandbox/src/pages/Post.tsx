import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export const Post: React.FC = () => {
  const { postId } = useParams();

  const [searchParams, setSearchPrams] = useSearchParams();
  console.log(searchParams.get("query"));
  console.log(searchParams.get("page"));
  return (
    <div>
      <h1>{`Post ${postId}`}</h1>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        laudantium ea laborum est rem autem. Facilis nesciunt aut ipsam a optio
        ea, sapiente non alias doloribus, labore necessitatibus corrupti
        voluptatem.
      </article>
      <button onClick={() => setSearchPrams({ query: "hoge", page: "1" })}>
        Seach
      </button>
    </div>
  );
};
