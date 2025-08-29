import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { globalStyles } from "./styles/global";

export const App: React.FC = () => (
  <>
    <style>{globalStyles}</style>
    <AppRouter />
  </>
);
