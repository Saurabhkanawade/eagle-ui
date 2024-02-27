import { Route, Routes } from "react-router-dom";

function CustomRouter({ routes }) {
  return (
    <Routes>
      {routes.map((route, i) => {
        return <Route {...route} />;
      })}
    </Routes>
  );
}

export default CustomRouter;
