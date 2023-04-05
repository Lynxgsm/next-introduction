"use client";

import Link from "next/link";
import Logo from "./Logo";
import { BsFillHandbagFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useSnapshot } from "valtio";
import { states } from "@/states";

const Topbar = () => {
  const { productsInCart } = useSnapshot(states);
  return (
    <nav className="py-4 px-8 flex items-center justify-between">
      <Link href="/">
        <Logo />
      </Link>
      <ul className="flex gap-8">
        <li>
          <Link href="/cart">
            <Link href="/cart">
              <span className=" bg-red-500 absolute right-20 top-12 rounded-full w-4 h-4 text-[10px] flex justify-center items-center">
                {productsInCart.length}
              </span>
              <BsFillHandbagFill size={24} />
            </Link>
          </Link>
        </li>
        <li>
          <FaUserAlt size={24} />
        </li>
      </ul>
    </nav>
  );
};

export default Topbar;
