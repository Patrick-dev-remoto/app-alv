import { Separator } from "../ui/separator";
import UserItem from "../useritem";

export default function Sidebar(){
    return <div className=" flex flex-col w-[250px] min-w-[250px] gap-4 border-r min-h-screen p-4">
        <div>
            <UserItem/>
        </div>
        <div className="grow"> Menu</div>
        <div>Settings/Nottifications</div>
    </div>
}