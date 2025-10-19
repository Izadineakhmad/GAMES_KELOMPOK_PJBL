import Index from "@/pages/dashboard/components";
import TrashGameWithPhysics from "@/ui/dashboard/Games";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path : '/',
        element: <Index />,
    },
    {
        path : '/game',
        element: <TrashGameWithPhysics />,
    }
  ])