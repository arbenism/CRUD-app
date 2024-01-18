import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routes = () => {
  const routes = [
    { path: "/", element: <Home /> },
    // { path: "blog", element: <Blog /> },
    // { path: "portofolio", element: <Portofolio /> },
    // { path: "contact", element: <Contact /> },
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
export default Routes;
