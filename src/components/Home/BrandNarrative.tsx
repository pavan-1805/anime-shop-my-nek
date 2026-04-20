import React from "react";

const divisions = [
  {
    id: 1,
    label: "ANIME DIVISION",
    title: "WAKE UP TO REALITY",
    color: "text-red-500",
    description:
      "Madara’s declaration wasn’t a threat - it was a lens. This tee carries the weight of disillusionment, rendered in ink and cotton. For those who’ve stopped pretending.",
  },
  {
    id: 2,
    label: "SAMURAI DIVISION",
    title: "RESPECT THE ROOTS",
    color: "text-lime-400",
    description:
      "A warrior is not defined by the blade, but by the burden they carry without breaking. Rooted in bushido. Built for the modern carry",
  },
  {
    id: 3,
    label: "TECH / CHAOS DIVISION",
    title: "ORGANIZED CHAOS",
    color: "text-white",
    description:
      "Systems fracture. Data corrupts. The operator adapts. This tee speaks to those who find structure in the chaos no one else can read.",
  },
];

const features = [
  { title: "240GSM", subtitle: "HEAVYWEIGHT COTTON", bg: "bg-red-900/30" },
  { title: "OVERSIZED", subtitle: "STREETWEAR SILHOUETTE", bg: "bg-lime-900/40" },
  { title: "LIMITED", subtitle: "NO RESTOCKS. EVER.", bg: "bg-lime-900/40" },
  { title: "MADE TO LAST", subtitle: "NOT MADE TO TREND", bg: "bg-red-900/30" },
];

const BrandNarrative = () => {
  return (
    <div className="w-full px-4 md:px-10 lg:px-20 py-12 text-white">

      {/* ===== SECTION 1: DIVISIONS ===== */}
      <h2 className="text-center font-mont font-extrabold uppercase 
        text-2xl md:text-4xl lg:text-6xl tracking-wide mb-12">
        EACH TEE IS A CHAPTER
      </h2>

      <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-20">
        {divisions.map((item) => (
          <div key={item.id} className="flex-1">
            <p className="text-[10px] tracking-[0.2em] text-gray-400 mb-3">
              {item.label}
            </p>

            <h3 className={`font-mont font-extrabold uppercase 
              text-lg md:text-xl lg:text-2xl mb-4 ${item.color}`}>
              {item.title}
            </h3>

            <p className="text-xs md:text-sm text-gray-300 leading-relaxed max-w-[320px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* ===== SECTION 2: 240 GSM ===== */}
      <div className="border-t border-bone/10 pt-12">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-mont font-extrabold text-3xl md:text-5xl">
            240 GSM
          </h2>
          <p className="text-gray-400 uppercase text-sm mt-2 tracking-wide">
            THE WEIGHT OF INTENT
          </p>
          <p className="text-xs md:text-sm text-gray-400 max-w-xl mx-auto mt-3">
            Every MYNEK piece is built on 240GSM heavy weight cotton. Not because it’s trending—
            because it holds the graphic, the wash, and the silhouette. Built to outlast the season.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {features.map((item, i) => (
            <div
              key={i}
              className={`h-[120px] md:h-[150px] flex flex-col justify-center items-center text-center ${item.bg}`}
            >
              <h3 className="font-bold text-lg md:text-xl">
                {item.title}
              </h3>
              <p className="text-xs text-gray-300 mt-1 tracking-wide">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default BrandNarrative;