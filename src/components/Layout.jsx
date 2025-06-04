import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout({ children }) {
  const location = useLocation();
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="box-border flex flex-col">
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

function NavBar() {
  return <div className="flex bg-black w-svw"></div>;
}
