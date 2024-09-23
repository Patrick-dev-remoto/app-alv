import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import { Separator } from "../ui/separator";
import { Bell, Cookie, CreditCard, Inbox, MessageSquare, Settings, User} from "lucide-react"
import UserItem from "../useritem";

export default function Sidebar() {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User/>,
          text: "Profile",
        },
        {
          link: "/",
          icon: <Inbox/>,
          text: "Inbox",
        },
        {
          link: "/",
          icon: <CreditCard/>,
          text: "Billing",
        },
        {
          link: "/",
          icon: <Bell/>,
          text: "Notifications",
        },
      ],
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings/>,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <Cookie/>,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <MessageSquare/>,
          text: "Logs",
        },
      ],
    },
  ];
  return (
    <div className=" flex flex-col w-[250px] min-w-[250px] gap-4 border-r min-h-screen p-4">
      <div>
        <UserItem />
      </div>
      <div className="grow">
        <Command style={{overflow: "visible"}}>
          <CommandList style={{overflow: "visible"}}>
            <CommandEmpty>No results found.</CommandEmpty>
            {menuList.map((menu: any, key: number) => (
                <CommandGroup key={key} heading={menu.group}>
                    {menu.items.map((option: any, optionKey: number) => 
                        <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">{option.icon} {option.text}</CommandItem>
                    )}
                </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <div>Settings/Nottifications</div>
    </div>
  );
}
