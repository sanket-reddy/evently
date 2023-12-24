import Link from "next/link";

const Navitems = () => {
  return (
    <div className="items-start  md:flex gap-20 w-full ">
      <div>
        <Link
          href="/home"
          className="cursor-pointer  text-blue-950 hover:text-blue-700"
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          href="/About"
          className="cursor-pointer  text-blue-950 hover:text-blue-700"
        >
          About
        </Link>
      </div>
      <div>
        <Link
          href="/Contact"
          className="cursor-pointer  text-violet-950 hover:text-violet-500"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navitems;
