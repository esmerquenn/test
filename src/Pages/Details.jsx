import React, { useEffect, useState } from "react";
import { useGetPostDetailQuery } from "../api/slices/getData";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import HorizontalPost from "../Components/Posts/HorizontalPost";
import VerticalPost from "../Components/Posts/VerticalPost";
import Error from "../Components/Error";

function Details() {
  const { slug } = useParams();
  const [itemId, setItemId] = useState(null);

  const { data: detailData, isLoading, error } = useGetPostDetailQuery(slug);

  useEffect(() => {
    setItemId(detailData);
  }, [detailData]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const images = document.querySelectorAll(".image, .main_img, .main_img_vertical, main_img_horizontal");
        let closest = null;
        let closestDist = Infinity;

        images.forEach((img) => {
          const imgRect = img.getBoundingClientRect();
          const imgCenter = imgRect.top + imgRect.height;
          const screenCenter = window.innerHeight / 2;
          const dist = Math.abs(screenCenter - imgCenter);

          if (dist < closestDist) {
            closest = img;
            closestDist = dist;
          }
        });

        images.forEach((img) => {
          if (img === closest) {
            img.style.filter = "grayscale(0)";
          } else {
            img.style.filter = "grayscale(100%)";
          }
        });
      }
    };
    // Event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
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
    </>
  );
}

export default Details;
