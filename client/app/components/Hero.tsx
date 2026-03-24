"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-xl md:text-2xl font-medium mb-4 tracking-widest uppercase"
        >
          Боломжуудын үүдийг хамтдаа нээцгээе
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
        >
          ЗӨВ БИЧГИЙН <br />{" "}
          <span className="text-yellow-400 font-outline-white">АВАРГА</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <button className="bg-white text-black text-lg font-bold px-10 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 shadow-2xl uppercase tracking-wider">
            Тоглож эхлэх
          </button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-70 cursor-pointer"
      >
        <ArrowDownCircle size={40} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;
