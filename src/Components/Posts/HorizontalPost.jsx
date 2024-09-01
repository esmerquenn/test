import React  from "react";

function HorizontalPost({ description, title, slug, thumbnail }) {
  return (
    <>
      <article className="main-width">
        <img className="main_img" src={thumbnail} alt={slug} />
        <div className="main_paragraf">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </article>
    </>
  );
}

export default HorizontalPost;
