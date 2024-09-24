import Header from "@/components/header";
import ItemsGrid from "@/components/itemsgrid";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-auto w-screen">
        <Header />
        <main className="flex-1 p-4">
          <ItemsGrid></ItemsGrid>
        </main>
      </div>
    </div>
  );
}
