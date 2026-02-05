import PlayRules from "./components/homeSections/PlayRules";
import AboutOurApp from "./components/homeSections/AboutOurApp";
import EndlessFun from "./components/homeSections/EndlessFun";
import AchievementsAndMilestones from "./components/homeSections/AchievementsAndMilestones";
import DownloadBanner from "./components/homeSections/DownloadBanner";
import AppFeatures from "./components/homeSections/AppFeatures";
import Hero from "./components/homeSections/Hero";
 
export default function Home() {
  return (
    <>
      {/* Fixed background - stays in place on scroll */}
      <div className="tournament-bg"></div>
      
      {/* Main content with proper layering */}
      <div className="relative min-h-screen">
        <section
          className="pb-20 relative z-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #ffffff 20%, #f9e9ff 45%, #865cda 100%)",
          }}
        >
          <div className="container mx-auto bg-white relative top-20 heroStart shadow-xl mb-20">
            <Hero />
            <AppFeatures />
            <AboutOurApp />
            <AchievementsAndMilestones />
            <EndlessFun />
            <PlayRules />
            <DownloadBanner />
          </div>
        </section>
      </div>
    </>
  );
}