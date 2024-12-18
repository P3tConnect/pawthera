"use client";

import Drawer from "./drawer";
import { Icons } from "@/components/landing/icons";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/src/config";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "@/src/lib/auth-client";

export default function Header() {
  const [addBorder, setAddBorder] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setAddBorder(true);
      } else {
        setAddBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={"sticky top-0 z-50 py-2 bg-background/60 backdrop-blur"}>
      <div className="flex justify-between items-center container">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 flex items-center space-x-2"
        >
          <Image
            width={40}
            height={40}
            src="/assets/images/Icone.png"
            alt="logo pawthera"
          />
          <span className="font-bold text-xl">{siteConfig.name}</span>
        </Link>

        <div className="hidden lg:block">
          <div className="flex items-center">
            <div className="gap-2 flex">
              {session ? (
                <Link
                  href="/dashboard/123"
                  className={buttonVariants({ variant: "default" })}
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href="/sign-in"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "rounded-xl",
                  )}
                >
                  Login
                </Link>
              )}
              {session ? null : (
                <Link
                  href="/sign-up"
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "w-full sm:w-auto text-black flex gap-2 rounded-xl",
                  )}
                >
                  <Icons.logo className="h-6 w-6" />
                  Get Started for Free
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="mt-2 cursor-pointer block lg:hidden">
          <Drawer />
        </div>
      </div>
      <hr
        className={cn(
          "absolute w-full bottom-0 transition-opacity duration-300 ease-in-out",
          addBorder ? "opacity-100" : "opacity-0",
        )}
      />
    </header>
  );
}
