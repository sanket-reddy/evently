import Link from "next/link";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Navitems from "./Navitems";
import MoblieNav from "./MoblieNav";

const Header = () => {
  return (
    <header className="w-full border-b flex p-2 items-center justify-between bg-violet-50">
      <div>
        <img
          src="/assets/images/logo.svg"
          alt="Logo"
          width={100}
          className="h-10 ml-3 cursor-pointer "
        />
      </div>
      <SignedIn>
        <nav className="hidden md:flex items-center sm:hidden">
          <Navitems />
        </nav>
      </SignedIn>
      <div className="flex items-end space-x-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/"></UserButton>
          <div className="md:hidden ">
            <MoblieNav />
          </div>
        </SignedIn>

        <SignedOut>
          <Button asChild className="rounded-full size-lg mr-3">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
