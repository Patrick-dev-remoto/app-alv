export default function UserItem(){
    return <div className="flex items-center gap-3 border rounded-[8px] p-2">
        <div className="avatar rounded-full h-10 w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
            <p>PD</p>
        </div>
        <div>
        <p className="text-[16px] font-bold">Patrick Dias</p>
        <p className="text-[12px] text-neutral-500">patrick.email@gmail.com</p>
        </div>
    </div>
}