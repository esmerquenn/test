import React, { useState } from "react";
import Posts from "../Components/Posts/Posts";
import { useGetInvestmentPostsQuery } from "../api/slices/getData";
import Loading from "../Components/Loading";
import { useGetAboutQuery } from "../api/slices/about";
import Error from "../Components/Error";
import { useTranslation } from "react-i18next";

function Investment() {
  const {t}=useTranslation()
  const [page, setPage] = useState(0);
  const { data: design, error, isLoading } = useGetInvestmentPostsQuery(page);
  const { data } = useGetAboutQuery();
  if (isLoading) return <Loading />;
  if (error) return <Error/>;

  return (
    <>
      <section>
        {design?.map((post) => (
          <Posts key={post.id} post={post} />
        ))}
      </section>

      {page > 0 && <button className="button_prev_next" onClick={() => setPage((prev) => prev - 1)}>{t("prev")}</button>}
      {design.length === 10 && <button className="button_prev_next" onClick={() => setPage((prev) => prev + 1)}>{t("next")}</button>}
    </>
  );
}

export default Investment;
