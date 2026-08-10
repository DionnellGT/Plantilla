import { createBrowserRouter, Navigate, RouterProvider } from "react-router"
import { LandingLayout } from "../layout/LandingLayout"
import { LandingPlantilla } from "../pages/LandingPlantilla"


const appRouter = createBrowserRouter([
    //Public routes
    {
        path: '/',
        element: <LandingLayout/>,
        children: [
            {
                index: true,
                element: <LandingPlantilla/>
            },
        ]
    },

    
    {
        path: '*',
        element: <Navigate to='/' />
    },
])

export function AppRouter() {
  return <RouterProvider router={appRouter} />
}