import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Navitems from "./Navitems";

const MoblieNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          ></Image>
        </SheetTrigger>
        <SheetContent className=" flex flex-col gap-6 bg-white ">
          <SheetHeader>
            <Image
              src="/assets/images/logo.svg"
              alt="Logo"
              width={140}
              height={130}
              className=" cursor-pointer"
            ></Image>
            <Separator className=" border border-grey-50 "></Separator>
            <Navitems></Navitems>
          </SheetHeader>
        </SheetContent>{" "}
      </Sheet>
    </div>
  );
};

export default MoblieNav;
