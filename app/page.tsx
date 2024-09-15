// import Layout from "../components/Layout";
// import Gallery from "../components/home/Gallery";
// import HeroBanner from "../components/home/HeroBanner";
import FlipCard from "../components/FlipCard";

export default function Home() {
  const cards = Array.from({ length: 12 }, (_, i) => ({
    front: `Front ${i + 1}`,
    back: `Back ${i + 1}`,
  }));

  return (
    <>
      <div className="grid grid-cols-3 gap-14 p-16">
        {cards.map((card, index) => (
          <FlipCard
            key={index}
            front={card.front}
            back={card.back}
            front_style="bg-blue-500 text-white"
            back_style="bg-red-500 text-white"
            card_style="w-[150px] h-[75px] rotate-[2.2deg]"
          />
        ))}
      </div>
    </>
  );
}
