import { useEffect, useState } from "react";
import MainLayout from "./layouts/MainLayout";
import DesktopLayout from "./layouts/DesktopLayout";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile ? <MainLayout /> : <DesktopLayout />;
}
