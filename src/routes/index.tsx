import {publicRoutes} from "./public";
import {useRoutes} from "react-router-dom";
import { AppProtectedRoutes, protectedRoutes } from "@/routes/protected";
import storage from "@/utils/storage";
import { Login } from "@/features/auth/routes/Login";

export const AppRoutes = () => {
    const isAuth = storage.getToken() != null;

    console.log(`[routes-index] isAuth: ${isAuth}`)

    const routes = isAuth ? protectedRoutes : publicRoutes;
    const element = useRoutes([
      ...routes,
        { path: '*', element: isAuth ? <AppProtectedRoutes/> : <Login/>}
    ]);

    return <>{element}</>;
};
