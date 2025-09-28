import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login for authentication
    navigate("/login");
  }, [navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero">
      <div className="text-center text-white">
        <h1 className="mb-4 text-4xl font-bold">SAI-AI Portal</h1>
        <p className="text-xl opacity-90">Redirecting to authentication...</p>
      </div>
    </div>
  );
};

export default Index;
