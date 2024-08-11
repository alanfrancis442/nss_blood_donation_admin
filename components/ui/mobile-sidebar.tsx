import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import { Button } from "./button";
import Sidebar from "./sidebar";
import { Ellipsis } from "lucide-react";

function MobileSidebar() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Ellipsis size={16} strokeWidth={1.5} />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>Dashboard</SheetTitle>
            <SheetDescription>Rudiram Dashboard</SheetDescription>
          </SheetHeader>
          <Sidebar />
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MobileSidebar;
