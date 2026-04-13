import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Friends from "../Pages/friends";
import Timeline from "../Pages/Timeline";
import Stats from "../Pages/Stats";;




 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <h2>Home</h2> },
      { path: "friends", element: <Friends /> },
      { path: "timeline", element: <Timeline /> },
      { path: "stats", element: <Stats /> },
    ],
  },
]);

export default router;