import Header from "@/components/Header";
import ItemsGrid from "@/components/itemsgrid";
import Register from "@/components/Register";
import ReportsF from "@/components/ReportsF";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [currentRoute, setCurrentRoute] = useState("items-grid");
  const [pageActive, setPageActive] = useState("");

  const handleRouteChange = (route: string) => {
    setPageActive(route);
    setCurrentRoute(route);
  };

  let mainContent;
  switch (currentRoute) {
    case "items-grid":
      mainContent = <ItemsGrid />;
      break;
    case "register":
      mainContent = <Register />;
      break;
    case "reports":
      mainContent = <ReportsF />
      break;
    default:
      mainContent = "Pages not found";
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar onRouteChange={handleRouteChange} pageActive={pageActive}/>
      <div className="flex-1 flex flex-col h-screen overflow-auto w-screen">
        <Header />
        <main className="flex-1 p-4">{mainContent}</main>
      </div>
    </div>
  );
}
