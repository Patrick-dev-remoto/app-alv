import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="pl-[250px] flex-1 flex flex-col h-full w-screen">
        <Header />
        <main className="flex-1 p-4 overflow-x-auto max-h-[40.3rem] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thumb-rounded">
          <Button variant={"outline"}>Click me man</Button>
        </main>
      </div>
    </div>
  );
}
