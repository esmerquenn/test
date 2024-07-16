import React from "react";

function AboutHeading({ data }) {
  console.log(data);
  return (
    <>
      {data ? (
        <article className="main-width">
          <img className="main_img" src={data.thumbnail} alt="img" />
          <div className="main_paragraf">
            <h2>{data.title}</h2>
            <p>{data.content}</p>
          </div>
        </article>
      ) : (
        ""
      )}
    </>
  );
}

export default AboutHeading;
