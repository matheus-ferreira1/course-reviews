import { FC } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import SignInForm from "@/components/SignInForm";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

const page: FC = () => {
  return (
    <div className="absolute inset-0">
      <div className="h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "self-start -mt-20"
          )}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Home
        </Link>

        <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[600px]">
          <SignInForm />
        </div>
      </div>
    </div>
  );
};

export default page;
