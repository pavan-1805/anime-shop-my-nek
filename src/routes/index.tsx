import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { WorldsGrid } from "@/components/WorldsGrid";
import { LoreSection } from "@/components/LoreSection";
import { Newsletter } from "@/components/Newsletter";
import { Navbar } from "@/components/NavBar/index";
import { Home } from "@/components/Home/index";
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shop My Nek" },
      {
        name: "description",
        content:
          "Heavyweight 240 GSM story-driven anime tees. A universe split into three worlds: Anime, Chaos, and Heritage. Drop 01 live now.",
      },
      { property: "og:title", content: "三 Worlds — One Awakening" },
      { property: "og:description", content: "Three worlds. One awakening. Limited anime drops." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-ink text-bone">
      <Navbar />
      <Home />
      {/* <WorldsGrid />
      <LoreSection />
      <Newsletter />
      <Toaster theme="dark" /> */}
    </main>
  );
}
