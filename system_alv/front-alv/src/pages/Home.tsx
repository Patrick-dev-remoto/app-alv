import Header from "@/components/header";
import ItemsGrid from "@/components/itemsgrid";
import Register from "@/components/register";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [currentRoute, setCurrentRoute] = useState("items-grid");
  const [pageActive, setPageActive] = useState("Pages not found");

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
