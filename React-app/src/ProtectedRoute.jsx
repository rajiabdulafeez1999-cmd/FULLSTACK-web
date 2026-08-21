import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../UserContext";

export default function ProtectedRoute() {
  const { user, loading } = useUser();

  //   console.log("ProtectedRoute user:", user);
  //   console.log("ProtectedRoute loading:", loading);

  if (loading) {
    return <div>loading......</div>;
  }

  if (!user) return <Navigate to="/" replace />;

  return <Outlet />;
}
