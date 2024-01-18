// import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./shared/components/Home";
import Main from "./shared/components/Main";
import Profile from "./shared/components/Profile";
import ComponentPage from "./shared/components/ComponentPage";

const container = document.getElementById("app");
// const root = createRoot(container);

const App = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "componentPage", element: <ComponentPage /> },
    { path: "profile", element: <Profile /> },
  ];
  return (
    <Routes>
      <Route to="/" element={<Main />}>
        {routes.map((r) => {
          return (
            <Route
              key={r.path}
              index={r.path === "/"}
              path={r.path}
              element={r.element}
            />
          );
        })}
      </Route>
    </Routes>
  );
};
// root.render(<App />);
export default App;
