import { LOGIN_ROUTE, REGISTRATION_ROUTE, STAFF_ROUTE, HR_ROUTE } from "../utils/const";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Staff from "../components/Staff";
import Metrics from "../components/Metrics";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
]

export const privateRoutes = [
    {
        path: HR_ROUTE,
        Component: Metrics
    },
    {
        path: STAFF_ROUTE,
        Component: Staff
    }
]