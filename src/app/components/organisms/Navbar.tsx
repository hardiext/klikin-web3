"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { images } from "@/data/image";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import SearchNav from "./SelectNav";
const Navbar = () => {
  return (
    <header className="pt-4 px-6">
      <nav className="w-full grid lg:grid-cols-3 grid-cols-2">
        <div className="place-items-start">
          <div className="flex items-center space-x-2">
            <Image src={images.logoDark} alt="logo" width={34} />
            <h1 className="font-bold text-md uppercase">Klikin.ly</h1>
          </div>
        </div>
        <div className="lg:flex hidden items-center place-content-center space-x-6 text-sm font-semibold">
          <Link href="#">About</Link>
          <Link href="#">FAQs</Link>
          <Link href="#">Contact</Link>
     
        </div>
        <div className="flex items-center gap-8 justify-end">
          <div className="flex flex-col  items-center text-xs font-semibold">
            <div className="relative">
              <div className="size-[16px] text-center bg-yellow-400 rounded-full text-xs absolute -top-1.5 -right-1.5">
                4
              </div>
              <ShoppingBag size={20} />
            </div>
            <label className="text-[10px] font-bold mt-2 lg:block hidden"> Cart</label>
          </div>
          <div className="lg:flex hidden flex-col  items-center text-xs font-semibold">
            <MdOutlineFavoriteBorder size={20} />
            <label className="text-[10px] font-bold mt-2">Favorites</label>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </div>
      </nav>
      <SearchNav/>
    </header>
  );
};
export default Navbar;
