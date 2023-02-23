import {
  MakeGenerics,
  useMatch,
  useNavigate,
  useSearch,
} from "@tanstack/react-location";
import React from "react";

type MyLocationGenerics = MakeGenerics<{
  Search: {
    pagination?: {
      index?: number;
      size?: number;
    };
    filters?: {
      name?: string;
    };
    desc?: boolean;
  };
}>;

export const Post: React.FC = () => {
  const {
    params: { postId },
  } = useMatch();

  const Search = useSearch<MyLocationGenerics>();
  const navigate = useNavigate<MyLocationGenerics>();

  const nextPage = () => {
    navigate({
      // All typesafe!
      search: (old) => ({
        ...old,
        pagination: {
          ...old?.pagination,
          index: old?.pagination?.index ? +1 : undefined,
        },
      }),
    });
  };
  console.log(Search);
  return (
    <div>
      <h1>{`Post ${postId}`}</h1>
      <article>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        laudantium ea laborum est rem autem. Facilis nesciunt aut ipsam a optio
        ea, sapiente non alias doloribus, labore necessitatibus corrupti
        voluptatem.
      </article>
      <button onClick={nextPage}>Seach</button>
    </div>
  );
};
