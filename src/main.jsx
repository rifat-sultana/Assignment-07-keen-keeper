import { createRoot } from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import router from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import TimelineProvider from "./context/TimelineProvider.jsx";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(

  <TimelineProvider>
      <RouterProvider router={router} />
    <ToastContainer />
  </TimelineProvider>
);