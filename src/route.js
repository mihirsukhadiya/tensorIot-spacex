import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Component/Loader";
const HomePage = lazy(() => import("./Component/HomePage"));
const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
