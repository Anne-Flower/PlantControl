import { Navigate, Outlet } from "react-router";
import { useID } from "../hooks/zustand";

const PrivateRoutes = () => {
  const id = useID((state: any) => state.id);

  return id ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
