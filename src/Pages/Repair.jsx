import React, { useState } from "react";
import Loading from "../Components/Loading";
import Posts from "../Components/Posts/Posts";
import { useGetRepairPostsQuery } from "../api/slices/getData";

function Repair() {
  const [page, setPage] = useState(0);
  const { data: design, error, isLoading } = useGetRepairPostsQuery(page);

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
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

export default Repair;
