import React from "react";

function VerticalPost({ description, title, slug, thumbnail }) {
  return (
    <>
      <article className="main-width_veritical">
        <img className="main_img_vertical" src={thumbnail} alt={slug} />
        <div className="main_paragraf">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </article>
    </>
  );
}

export default VerticalPost;
