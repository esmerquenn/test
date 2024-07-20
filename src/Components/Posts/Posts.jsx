import React, { useEffect } from "react";
import HorizontalPost from "./HorizontalPost";
import VerticalPost from "./VerticalPost";
import { Link } from "react-router-dom";

function Posts({ post }) {
  const { thumbnail_type, description, title, slug, thumbnail } = post;
  useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.innerWidth < 768) {
  //       const images = document.querySelectorAll(".main_img, .main_img_vertical, main_img_horizontal");
  //       let closest = null;
  //       let closestDist = Infinity;

  //       images.forEach((img) => {
  //         const imgRect = img.getBoundingClientRect();
  //         console.log(imgRect, 'img rect');
  //         const imgCenter = imgRect.top + imgRect.height / 2;
  //         const screenCenter = window.innerHeight / 2;
  //         const dist = Math.abs(screenCenter - imgCenter);

  //         if (dist < closestDist) {
  //           closest = img;
  //           closestDist = dist;
  //         }
  //       });

  //       images.forEach((img) => {
  //         if (img === closest) {
  //           img.style.filter = "grayscale(0)";
  //         } else {
  //           img.style.filter = "grayscale(100%)";
  //         }
  //       });
  //     }
  //   };
  //   // Event listener for scroll
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const images = document.querySelectorAll(".main_img, .main_img_vertical, main_img_horizontal");
        let closest = null;
        let closestDist = Infinity;

        images.forEach((img) => {
          const imgRect = img.getBoundingClientRect();
          console.log(imgRect, 'img rect');
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
  return (
    <div className="posts">
      {thumbnail_type === "HORIZONTAL" ? (
        <Link to={`/detail/${slug}`}>
          <HorizontalPost key={post.id} {...{ description, title, slug, thumbnail }} />
        </Link>
      ) : (
        <Link to={`/detail/${slug}`}>
          <VerticalPost key={post.id} {...{ description, title, slug, thumbnail }} />
        </Link>
      )}
    </div>
  );
}

export default Posts;
