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
  return (
    <div className="h-screen p-4 border-r">
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <Separator />
        </CardHeader>
        <CardContent>
          <a href="/users">
            <Button className="w-full my-2">USERS</Button>
          </a>
          <a href="/requests">
            <Button className="w-full my-2">BLOOD REQUESTS</Button>
          </a>
          <a href="/bloodcamp">
            <Button className="w-full my-2">BLOOD CAMP</Button>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}

export default Sidebar;
