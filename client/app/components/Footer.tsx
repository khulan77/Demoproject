"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#5D3191] text-white pt-16  font-sans border-t-4 border-[#4a2775]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="relative w-12 h-12 bg-white rounded-xl p-1 shadow-[0_4px_0_0_rgba(0,0,0,0.2)] transition-transform group-hover:scale-110 group-hover:-rotate-3">
                <Image
                  src="/logo.png"
                  alt="Зөв бичих баатар лого"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h2 className="text-[#FFD700] text-3xl font-black tracking-tight uppercase drop-shadow-md">
                Цээж Бичиг
              </h2>
            </div>

            <div className="space-y-3">
              <p className="inline-block bg-[#8DC63F] text-[#2D5100] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Бага ангийнханд зориулсан
              </p>
              <p className="text-sm leading-relaxed opacity-90 max-w-sm font-medium">
                Монгол хэлний зөв бичих дүрмийг
                <span className="text-[#8DC63F] font-extrabold underline decoration-2 underline-offset-4">
                  тоглоомын аргаар
                </span>
                эзэмших шилдэг туслах. Баатар болоход бэлэн үү?
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[12px] font-black uppercase tracking-[0.15em] mb-6 text-[#8DC63F]">
              Суралцах
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Түвшинүүд (1-5 анги)", href: "#" },
                { name: "Цээж бичиг хийх", href: "#" },
                { name: "Миний амжилт", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-bold opacity-80 hover:opacity-100 hover:text-[#FFD700] transition-all flex items-center gap-2 group"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#8DC63F] group-hover:scale-125 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[12px] font-black uppercase tracking-[0.15em] mb-6 text-[#8DC63F]">
              Тусламж & Холбоос
            </h4>
            <div className="flex items-center gap-3 mb-4"></div>
            <span className="h-2 w-2 rounded-full bg-[#8DC63F] group-hover:scale-125 transition-transform"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
