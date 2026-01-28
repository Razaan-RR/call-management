import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "calls", element: <div>Call Logs</div> },
      { path: "appointments", element: <div>Appointments</div> },
      { path: "settings", element: <div>Settings</div> },
    ],
  },
]);

export default router;
