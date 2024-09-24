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
    const [notifications, setNotifications] = useState([
        { text: "New message received", date: "2 min ago", read: false },
        { text: "Your post was liked", date: "1 hour ago", read: true },
      ])

  return (
    <div className="flex-shrink-0 grid grid-cols-2 border-b p-3">
      <CommandDemo></CommandDemo>

      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="relative focus-visible:ring-0">
              <div
                className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 ${
                  notifications.find((x) => !x.read)
                    ? "bg-green-500"
                    : "bg-neutral-200"
                }`}
              ></div>
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {notifications.map((item, key) => (
              <DropdownMenuItem
                key={key}
                className="p-1 cursor-pointer hover:bg-neutral-50 transition flex items-start gap-2"
              >
                <div
                  className={`h-3 w-3 rounded-full my-1 ${
                    !item.read ? "bg-green-500" : "bg-neutral-200"
                  }`}
                ></div>
                <div>
                  <p>{item.text}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
