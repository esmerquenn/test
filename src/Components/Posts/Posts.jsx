import React, { useEffect } from "react";
import HorizontalPost from "./HorizontalPost";
import VerticalPost from "./VerticalPost";
import { Link } from "react-router-dom";

function Posts({ post }) {
  const { thumbnail_type, description, title, slug, thumbnail } = post;

  const truncateDescription = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const images = document.querySelectorAll(".main_img, .main_img_vertical, main_img_horizontal");
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
  const truncatedDescription = truncateDescription(description, 60);
  return (
    <div className="posts">
      {thumbnail_type === "HORIZONTAL" ? (
        <Link to={`/detail/${slug}`}>
          <HorizontalPost key={post.id} {...{ description: truncatedDescription, title, slug, thumbnail }} />
        </Link>
      ) : (
        <Link to={`/detail/${slug}`}>
          <VerticalPost key={post.id} {...{ description: truncatedDescription, title, slug, thumbnail }} />
        </Link>
      )}
    </div>
  );
}

export default Posts;
