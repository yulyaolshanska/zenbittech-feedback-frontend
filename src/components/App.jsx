import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import theme from "styles/theme";

const FeedbackPage = lazy(() => import("../pages/feedbackPage/FeedbackPage"));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<FeedbackPage />} />
          <Route path="*" element={<div>Not found</div>}></Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
};
