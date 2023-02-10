import React from "react";
import { useParams } from "react-router-dom";
import NavbarTop from "../Components/NavbarTop";
import NavbarLeft from "../Components/NavbarLeft";
import Dashboard from "../Components/Dashboard";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

// Component for display the userboard
function UserBoard() {
  const { userId } = useParams();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="layout">
        <NavbarTop />
        <div className="layout_bottom">
          <NavbarLeft />
          <Dashboard userId={userId} />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default UserBoard;
