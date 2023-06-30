import React from "react";
import {Outlet} from "react-router-dom";
import {Dashboard} from "@/features/budgets/routes/Dashboard";
import { MainLayout } from "@/features/auth/components/MainLayout";


export const AppProtectedRoutes = () => {
    return (
      <MainLayout>
          <Outlet/>
      </MainLayout>
    )
}

export const protectedRoutes = [
    {
        path: '/',
        element: <AppProtectedRoutes />,
        children: [
            { path: '', element: <Dashboard />}
        ]
    }
]