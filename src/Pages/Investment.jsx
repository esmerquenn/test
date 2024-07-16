import React, { useState } from "react";
import Posts from "../Components/Posts/Posts";
import { useGetInvestmentPostsQuery } from "../api/slices/getData";
import Loading from "../Components/Loading";
import { useGetAboutQuery } from "../api/slices/about";

function Investment() {
  const [page, setPage] = useState(0);
  const { data: design, error, isLoading } = useGetInvestmentPostsQuery(page);
  const { data, refetch } = useGetAboutQuery();
  console.log(data, "data About");
  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <section>
        {design?.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </section>

      {page > 0 && <button onClick={() => setPage((prev) => prev - 1)}>Öncəki</button>}
      {design.length === 10 && <button onClick={() => setPage((prev) => prev + 1)}>Sonrakı</button>}
    </>
  );
}

export default Investment;
