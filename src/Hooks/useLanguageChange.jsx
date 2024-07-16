import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postsApi } from "../api/slices/getData";
import { aboutApi } from "../api/slices/about";
import { employeeApi } from "../api/slices/employee";

const useLanguageChange = (i18n) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      dispatch(postsApi.util.invalidateTags(["posts"]));
      dispatch(aboutApi.util.invalidateTags(["detail"]));
      dispatch(employeeApi.util.invalidateTags(["employee"]));
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [dispatch, i18n]);
};

export default useLanguageChange;
