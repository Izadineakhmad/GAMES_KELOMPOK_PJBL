import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Index from "@/pages/dashboard/components/index.tsx";
import { RouterProvider } from "react-router";
import { router } from "./setup/routes/router.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Index /> */}
    <RouterProvider router={router} />
  </StrictMode>,
);
