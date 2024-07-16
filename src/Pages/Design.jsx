import React, { useEffect, useState } from "react";
import { useGetDesignPostsQuery } from "../api/slices/getData";
import Loading from "../Components/Loading";
import Posts from "../Components/Posts/Posts";

function Design() {
  const [page, setPage] = useState(0);
  const { data: design, error, isLoading } = useGetDesignPostsQuery(page);
  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  console.log(design, "design posts");
  return (
    <>
      <section>
        {design.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </section>

      {page > 0 && <button onClick={() => setPage((prev) => prev - 1)}>Öncəki</button>}
      {design.length === 10 && <button onClick={() => setPage((prev) => prev + 1)}>Sonrakı</button>}
    </>
  );
}

export default Design;
