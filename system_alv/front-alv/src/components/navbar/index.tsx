import { ChevronDown, LogOut, FileText, UserPlus, Car } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

const carrosItems: { title: string; href: string }[] = [
  {
    title: "Cadastro",
    href: "/carros/cadastro",
  },
  {
    title: "Integrar",
    href: "/carros/integrar",
  },
  {
    title: "Atualizar",
    href: "/carros/atualizar",
  },
]

export default function Navbar() {
  return (
      <>
      <aside className="flex w-64 h-full flex-col justify-between border-r bg-background">
        <div>
          <div className="p-6">
            <h1 className="flex items-center text-2xl font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-6 w-6"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" y1="9" x2="9.01" y2="9" />
                <line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
              Minha App
            </h1>
          </div>
          <nav className="space-y-2 px-4">
            <a
              href="/cadastro"
              className="flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <UserPlus className="mr-2 h-4 w-4" />
              Cadastro
            </a>
            <Collapsible>
              <CollapsibleTrigger className="flex w-full items-center bg-transparent justify-between rounded-lg px-4 py-2 text-left hover:bg-accent hover:text-accent-foreground">
                <span className="flex items-center">
                  <Car className="mr-2 h-4 w-4" />
                  Carros
                </span>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-1 px-4 py-2">
                {carrosItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="block rounded-md px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.title}
                  </a>
                ))}
              </CollapsibleContent>
            </Collapsible>
            <a
              href="/relatorios"
              className="flex items-center rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <FileText className="mr-2 h-4 w-4" />
              Relatórios
            </a>
          </nav>
        </div>
        <div className="p-4">
          <Button variant="outline" className="w-full justify-start" onClick={() => console.log("Logout clicked")}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>
      </>
  )
}