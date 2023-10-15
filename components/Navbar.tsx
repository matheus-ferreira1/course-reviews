import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "./ui/button";

const Navbar: FC = () => {
  return (
    <header className="fixed top-0 inset-x-0 h-fit border-b z-[10] py-3">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/">Courses review</Link>

        <p>search bar here</p>

        <Link href="/sign-in" className={buttonVariants()}>
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
