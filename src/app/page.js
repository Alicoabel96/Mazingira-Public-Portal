import {
  getAnnouncement,
  listNavLinks,
  listStats,
  listSlides,
  listRegions,
  listModules,
  getFooterLinks,
} from "@/lib/db/data";

import AnnouncementBar from "@/components/layout/AnnouncementBar";
import SiteHeader      from "@/components/layout/SiteHeader";
import NavBar          from "@/components/layout/NavBar";
import StickyBanner    from "@/components/layout/StickyBanner";
import StatsTicker     from "@/components/layout/StatsTicker";
import HeroCarousel    from "@/components/hero/HeroCarousel";
import ModuleDashboard from "@/components/dashboard/ModuleDashboard";
import Footer          from "@/components/layout/Footer";

export default async function Home() {
  // Parallel server-side fetches — data is pre-rendered, no client waterfall.
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
      {/* Sticky top — header + nav stay fixed on scroll, announcement hides */}
      <StickyBanner
        announcement={<AnnouncementBar message={announcement} />}
      >
        <SiteHeader />
        <NavBar links={navLinks} />
      </StickyBanner>

      {/* Ticker and hero stay in the normal document flow */}
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
