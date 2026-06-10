import {
  getAnnouncement,
  listNavLinks,
  listStats,
  listSlides,
  listRegions,
  listModules,
  getFooterLinks,
} from "@/lib/db/data";

import AppHeader      from "@/components/layout/AppHeader";
import StatsTicker    from "@/components/layout/StatsTicker";
import HeroCarousel   from "@/components/hero/HeroCarousel";
import ModuleDashboard from "@/components/dashboard/ModuleDashboard";
import Footer         from "@/components/layout/Footer";

export default async function Home() {
  const [announcement, navLinks, stats, slides, regions, modules, footer] =
    await Promise.all([
      getAnnouncement(),
      listNavLinks(),
      listStats(),
      listSlides(),
      listRegions(),
      listModules(),
      getFooterLinks(),
    ]);

  return (
    <>
      {/* Unified scroll-aware header */}
      <AppHeader announcement={announcement} navLinks={navLinks} />

      <StatsTicker initialStats={stats} />
      <HeroCarousel initialSlides={slides} />

      <main id="main" className="flex flex-col w-full">
        <ModuleDashboard
          initialRegions={regions}
          initialModules={modules}
        />
      </main>

      <Footer links={footer} />
    </>
  );
}
