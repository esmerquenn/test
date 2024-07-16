import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import i18n from "../i18next";
import { getFromLocale } from "../utils";
export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4444/api/1.0",
  prepareHeaders: (headers) => {
    const currentLanguage = getFromLocale("i18Next") || "en"; // Movcud dili al
    headers.set("Accept-Language", currentLanguage); // Accept-Language başlığı
    return headers;
  }
});
