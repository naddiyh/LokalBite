"use client";

import Link from "next/link";
import { Navlink } from "./navLink";
import { PrimaryButton } from "../button/PrimaryButton";
import { useEffect, useState } from "react";
import Image from "next/image";
export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScroll(scrollPosition > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="drawer z-20">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div
          className={` ${isScroll ? "bg-white bg-opacity-70 text-primary-orange shadow-sm hover:text-primary-soft-orange" : "text-white"} navbar fixed left-0 right-0 top-0 w-full gap-2 px-8 py-6 md:px-28`}
        >
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="flex pr-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-1 items-center gap-2 text-xl font-bold text-primary-orange">
            <Image
              src="/images/logo.png"
              width={30}
              height={30}
              alt="logo"
              objectPosition="top"
              objectFit="cover"
              className="hidden md:flex"
            />
            <p>LokalBite</p>
          </div>

          <div className="hidden gap-10 md:flex">
            {Navlink.map((item) => (
              <Link key={item.href} href={item.href}>
                {
                  <li className="inline-flex hover:text-primary-soft-orange">
                    {item.title}
                  </li>
                }
              </Link>
            ))}
            <PrimaryButton fullWidth={false} color={false} hover={false}>
              Login
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-60 bg-base-200 pt-14">
          {Navlink.map((item) => (
            <Link key={item.href} href={item.href} className="p-4">
              {<li className="inline-flex pl-4 text-white">{item.title}</li>}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
