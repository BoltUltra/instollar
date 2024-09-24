"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";

const navigationRoutes = [
  {
    title: "Home",
    key: "home",
    path: "/",
  },
  {
    title: "About",
    key: "about",
    path: "/about-us",
  },
  {
    title: "My Businesses",
    key: "my-businesses",
    path: "/view-business",
  },
  {
    title: "Discover Businesses",
    key: "discover-businesses",
    path: "/search",
  },
  {
    title: "Support",
    key: "support",
    path: "/contact-support",
  },
  {
    title: "My Account",
    key: "my-account",
    path: "/account",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-primary-100 px-3 lg:px-0 py-[26px] fixed top-0 z-[99999]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image width={100} height={20} src="/svg/logo.svg" alt="" />
            </Link>

            <div className="hidden md:flex w-auto font-medium text-sm text-white">
              <div className="flex items-center gap-8 mx-8">
                {navigationRoutes.map((route) => (
                  <Link
                    key={route.path}
                    href={route?.path}
                    className={`${
                      pathname === route.path
                        ? "text-green-500 mx-3 sm:mx-4 p-3 whitespace-nowrap"
                        : "text-white"
                    } text-base font-normal leading-6`}
                  >
                    {route.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button
              stylet="border border-white text-white rounded-[128px]"
              onClick={() => alert("Clicked!")}
              title="Contact Us"
            />
            <Button
              stylet="border border-secondary text-secondary rounded-[128px]"
              onClick={() => alert("Clicked!")}
              title="Get Started"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
