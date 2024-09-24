import { Bell } from "lucide-react";
import { CommandDemo } from "../ui/commandDemo";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { read } from "fs";

export default function Header() {
  const [notifications, setNotifications] = useState<any>([
    {
      text: "This is a notification",
      date: "20-02-2015",
      read: true,
    },
    {
      text: "This is another notification",
      date: "20-02-2015",
      read: false,
    },
  ]);
  return (
    <div className="grid grid-cols-2 border-b p-3 overflow-hidden">
      <CommandDemo></CommandDemo>

      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-transparent border-none p-0 focus:border-none focus-within:outline-none focus-visible:outline-none">
            {" "}
            <Button variant="outline" className="relative">
              <div
                className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${
                  notifications.find((x: any) => x.read === true)
                    ? "bg-green-500"
                    : "bg-neutral-200"
                }`}
              ></div>
              <Bell className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item: any, key: number) => (
              <DropdownMenuItem
                className="p=1 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
                key={key}
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    !item.read ? "bg-green-500" : "bg-neutral-200"
                  }`}
                ></div>
                <div>
                  <p>{item.text}</p>
                  <p>{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
            {/* 
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
