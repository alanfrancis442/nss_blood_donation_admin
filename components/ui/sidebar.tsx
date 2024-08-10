import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { Separator } from "./separator";

function Sidebar() {
  const options = ["users", "requests", "products"];

  return (
    <div className="h-screen p-4 border-r">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent>
          {options.map((option) => (
            <Button key={option} className="w-full my-2">
              {option}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

export default Sidebar;
