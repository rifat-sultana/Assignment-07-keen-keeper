import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Friends from "../Pages/friends";
import Timeline from "../Pages/Timeline";
import StatsData from "../components/StatsData/StatsData";
import Home from "../Pages/Home";
import FriendsDetails from "../Pages/FriendDetails";
import Stats from "../components/Stats/Stats";
import ErrorPage from "../Pages/ErrorPage";


 const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home/> },
      { path: "statsData", element: <StatsData />},
      { path: "friends", element: <Friends /> },
      { path: "timeline", element: <Timeline /> },
      { path: "stats", element: <Stats /> },
      { path:"/friend/:id", element: <FriendsDetails />},
      { path: "*" , element: <ErrorPage />  },     
    ],
  },
]);

export default router;