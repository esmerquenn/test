import React, { useEffect, useState } from "react";
import { useGetPostDetailQuery } from "../api/slices/getData";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import HorizontalPost from "../Components/Posts/HorizontalPost";
import VerticalPost from "../Components/Posts/VerticalPost";

function Details() {
  const { slug } = useParams();
  const [itemId, setItemId] = useState(null);

  const { data: detailData, isLoading, error } = useGetPostDetailQuery(slug);

  useEffect(() => {
    console.log(slug, detailData, "detailId");
    setItemId(detailData);
  }, [detailData]);
  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {itemId ? (
        <>
          {itemId.thumbnail_type === "HORIZONTAL" ? (
            <HorizontalPost
              key={itemId.id}
              {...{ description: itemId.description, title: itemId.title, slug: itemId.slug, thumbnail: itemId.thumbnail }}
            />
          ) : (
            <VerticalPost
              key={itemId.id}
              {...{ description: itemId.description, title: itemId.title, slug: itemId.slug, thumbnail: itemId.thumbnail }}
            />
          )}

          <div className="content_div" dangerouslySetInnerHTML={{ __html: itemId?.content }} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default Details;
