"use client";

import Link from "next/link";
import Image from "next/image";
import { UseState, UseEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Logo } from "../public/assets/images/logo.svg";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="assets/images/logo.svg"
          alt="image text"
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>
    </nav>
  );
};

export default Nav;
