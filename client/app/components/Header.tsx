import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // shadcn/ui ашиглаж байгаа бол

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-6 px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-black tracking-tighter uppercase">
            ЗӨВ БИЧГИЙН <span className="text-yellow-400">АВАРГА</span>
          </h1>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide">
          <Link href="/about" className="hover:opacity-70 transition">
            БИДНИЙ ТУХАЙ
          </Link>
          <Link href="/rules" className="hover:opacity-70 transition">
            ДҮРЭМ
          </Link>
          <Link href="/leaderboard" className="hover:opacity-70 transition">
            ЧАНСАА
          </Link>

          <Link href="/login">
            <button className="bg-white text-black px-8 py-2.5 rounded-full font-bold hover:bg-gray-200 transition duration-300 shadow-lg">
              НЭВТРЭХ
            </button>
          </Link>

          <div className="flex items-center gap-1 cursor-pointer border-l border-white/30 pl-6">
            <span className="text-[12px]">MONGOLIA</span>
            <span className="text-lg">🌐</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
