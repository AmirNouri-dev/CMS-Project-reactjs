import React, { useState } from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";

export default function App() {
  const router = useRoutes(routes);
  return (
    <>
      <TopBar />
      {router}
    </>
  );
}
