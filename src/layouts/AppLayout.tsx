import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div className="pt-19 min-h-dvh w-full relative px-3 md:px-16">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
