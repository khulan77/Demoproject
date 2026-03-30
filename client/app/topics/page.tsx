"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Play } from "lucide-react";
import IslandOverlay from "../about/components/IslandMap";

const topics = [
  {
    id: 1,
    title: "Амьтан",
    icon: "🐾",
    img: "/islands/animals.png",
    locked: false,
  },
  {
    id: 2,
    title: "Сансар",
    icon: "🚀",
    img: "/islands/space.png",
    locked: false,
  },
  {
    id: 3,
    title: "Хоол хүнс",
    icon: "🍕",
    img: "/islands/food.png",
    locked: false,
  },
  {
    id: 4,
    title: "Сургууль",
    icon: "🎓",
    img: "/islands/school.png",
    locked: true,
  },
  {
    id: 5,
    title: "Байгаль",
    icon: "🌲",
    img: "/islands/nature.png",
    locked: true,
  },
  {
    id: 6,
    title: "Спорт",
    icon: "🏀",
    img: "/islands/sports.png",
    locked: true,
  },
  {
    id: 7,
    title: "Тээвэр",
    icon: "🚗",
    img: "/islands/transport.png",
    locked: true,
  },
  {
    id: 8,
    title: "Далай",
    icon: "🌊",
    img: "/islands/ocean.png",
    locked: true,
  },
  {
    id: 9,
    title: "Өнгөнүүд",
    icon: "🎨",
    img: "/islands/colors.png",
    locked: true,
  },
  {
    id: 10,
    title: "Тоо",
    icon: "🔢",
    img: "/islands/numbers.png",
    locked: true,
  },
];

export default function TopicsPage() {
  const [selectedIsland, setSelectedIsland] = useState<any>(null);
  const backgroundImageUrl = "/screen.png";

  return (
    <main
      className="min-h-screen relative overflow-hidden flex flex-col items-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />

      <header className="relative z-10 pt-12 pb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block"
        >
          <h1 className="text-4xl md:text-5xl font-[1000] text-white uppercase italic tracking-tighter drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Сэдэв сонгох
          </h1>
          <div className="bg-[#5D3191]/90 backdrop-blur-md px-6 py-1 rounded-full shadow-xl mt-2 border border-white/20">
            <p className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
              Өөрийн дуртай ертөнцөөр аялаарай!
            </p>
          </div>
        </motion.div>
      </header>

      {/* Topics Grid - Энд хэмжээг нь багасгасан */}
      <section className="relative z-10 w-full max-w-5xl px-6 py-4 mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
          {topics.map((topic) => (
            <motion.div
              key={topic.id}
              whileHover={!topic.locked ? { y: -5, scale: 1.05 } : {}}
              whileTap={!topic.locked ? { scale: 0.95 } : {}}
              onClick={() =>
                !topic.locked &&
                setSelectedIsland({ grade: topic.title, img: topic.img })
              }
              className={`
                relative group cursor-pointer w-full max-w-[150px] aspect-[3/4] rounded-[1.8rem] p-3 flex flex-col items-center justify-between
                transition-all duration-300 border-b-[5px] backdrop-blur-md
                ${
                  topic.locked
                    ? "bg-white/20 border-white/10 grayscale opacity-60 cursor-not-allowed"
                    : "bg-white/90 border-purple-200 shadow-lg hover:shadow-purple-400/40"
                }
              `}
            >
              {/* Lock Icon */}
              {topic.locked && (
                <div className="absolute top-3 right-3 z-20 bg-black/20 p-1 rounded-full">
                  <Lock size={14} className="text-white" />
                </div>
              )}
              <div
                className={`
                w-full aspect-square rounded-[1.4rem] flex items-center justify-center text-4xl shadow-inner
                ${topic.locked ? "bg-gray-200/50" : "bg-gradient-to-br from-purple-50 to-blue-50"}
              `}
              >
                <span className="drop-shadow-sm">{topic.icon}</span>
              </div>
              <div className="text-center w-full mt-2">
                <h3
                  className={`font-black text-[11px] uppercase tracking-tighter mb-2 ${topic.locked ? "text-white/70" : "text-[#5D3191]"}`}
                >
                  {topic.title}
                </h3>

                {!topic.locked ? (
                  <div className="bg-[#5D3191] text-white text-[9px] font-black py-1.5 rounded-lg flex items-center justify-center gap-1 group-hover:bg-[#8DC63F] transition-colors shadow-md">
                    <Play size={8} fill="currentColor" />
                    PLAY
                  </div>
                ) : (
                  <div className="h-1 w-full bg-white/30 rounded-full" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <AnimatePresence>
        {selectedIsland && (
          <IslandOverlay
            island={selectedIsland}
            onClose={() => setSelectedIsland(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
