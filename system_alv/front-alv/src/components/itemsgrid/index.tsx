import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function ItemsGrid() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        <Card className="h-[300px] flex items-center justify-center">
          <Button variant="outline">Click me man</Button>
        </Card>
        <div className="grid gap-[32px]">
          <Card className="h-[134px]" />
          <Card className="h-[134px]" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[32px]">
        <Card className="h-[300px] flex items-center justify-center">
          Hello world
        </Card>
        <Card className="h-[300px] flex items-center justify-center">
          Hello world
        </Card>
        <Card className="h-[300px] flex items-center justify-center">
          Hello world
        </Card>
      </div>
    </div>
  );
}
