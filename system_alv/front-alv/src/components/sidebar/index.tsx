import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../ui/command";
import {
  Bell,
  Car,
  Clipboard,
  Cookie,
  Inbox,
  LogOut,
  MessageSquare,
  Settings,
  SquarePen,
  User,
} from "lucide-react";
import UserItem from "../Useritem";
import { Button } from "../ui/button";

interface SidebarProps {
  onRouteChange: (route: string) => void;
  pageActive: string;
}

export default function Sidebar({ onRouteChange, pageActive }: SidebarProps) {
  const menuList = [
    {
      group: "F&I",
      items: [
        {
          link: "register",
          icon: <SquarePen className="h-5 w-5" />,
          text: "Register",
        },
        {
          link: "reports",
          icon: <Clipboard className="h-5 w-5" />,
          text: "Reports",
        },
        {
          link: "/",
          icon: <Car className="h-5 w-5" />,
          text: "Cars",
        },
      ],
    },
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User className="h-5 w-5" />,
          text: "Profile",
        },
        {
          link: "/",
          icon: <Inbox className="h-5 w-5" />,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <Bell className="h-5 w-5" />,
          text: "Notifications",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings className="h-5 w-5" />,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <Cookie className="h-5 w-5" />,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <MessageSquare className="h-5 w-5" />,
          text: "Logs",
        },
      ],
    },
  ];
  return (
    <div className="w-[250px] flex flex-col gap-4 border-r h-screen p-4 shadow-sm overflow-y-auto">
      <div>
        <UserItem />
      </div>
      <div className="grow border rounded-lg shadow-sm">
        <Command className="overflow-visible">
          <CommandList className="overflow-visible">
            <CommandEmpty>No results found.</CommandEmpty>
            {menuList.map((menu, key) => (
              <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option, optionKey) => (
                  <CommandItem
                    key={optionKey}
                    className={`flex gap-2 p-0 cursor-pointer ${
                      pageActive === option.link ? "bg-slate-200" : ""
                    }`}
                  >
                    <a
                      onClick={() => onRouteChange(option.link)}
                      className={`text-slate-950 flex gap-2 p-2 w-full ${
                        pageActive === option.link
                          ? "hover:text-slate-950 bg-slate-200 rounded cursor-default"
                          : ""
                      }`}
                    >
                      {option.icon} {option.text}
                    </a>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <Button
        variant="outline"
        className="w-full mt-auto flex justify-between p-3 focus-within:outline-none focus-visible:outline-none"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </div>
  );
}
