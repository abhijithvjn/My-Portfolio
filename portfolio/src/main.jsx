import { routes } from './routes';
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import './index.css'

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);