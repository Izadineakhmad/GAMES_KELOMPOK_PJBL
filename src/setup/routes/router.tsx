import TrashGameWithPhysics from "@/ui/dashboard/Games";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path : '/',
        element: <TrashGameWithPhysics/>,
    },
  ])