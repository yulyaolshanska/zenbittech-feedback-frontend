import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const BASE_URL = "http://localhost:3001/feedback";
const BASE_URL =
  "http://zenbittech-feedback-backend-production.up.railway.app/feedback";

export const feedbackApi = createApi({
  reducerPath: "feedbackApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Feedbacks"],
  endpoints: (builder) => ({
    addFeedback: builder.mutation({
      query: (data) => ({ url: "/", method: "POST", body: data }),
    }),
    invalidatesTags: ["Feedbacks"],
  }),
});

export const { useAddFeedbackMutation } = feedbackApi;
