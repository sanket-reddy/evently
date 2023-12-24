import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div>
      <footer className="flex  justify-between bg-slate-800  text-white p-3 ">
        <div className="mt-2">
          <h1>About Us</h1>
          <h1>Contact</h1>
          <h1>More Like This</h1>
        </div>
        <div className="">
          <h1>Follow us </h1>
          <Link
            href="https://www.instagram.com/?hl=en"
            className="flex-between gap-2"
          >
            <Image
              src="/assets/icons/instagram.jpeg"
              width={30}
              height={30}
              alt="insta logo"
            ></Image>
            <h1>Instagram</h1>
          </Link>
          <Link href="/X" className="flex mt-2">
            <Image
              src="/assets/icons/x logo.png"
              width={30}
              height={30}
              alt="insta logo"
            ></Image>
            <h1 className="align-middle ml-5">X</h1>
          </Link>
          <div></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
