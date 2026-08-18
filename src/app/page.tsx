import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutPage from "./about/page";
import SkillsSection from "@/components/SkillsSection";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import ScrollToTop from "@/components/ScrollToTop";

const Home = () => {
  return (
    <main className="min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-slate-950 overflow-hidden relative">

      {/* بخش اول: معرفی و هدر */}
      <section id="hero" className="py-12 lg:py-16">
        <Hero />
      </section>

      {/* خط جداکننده با انیمیشن نور ملایم */}
      <div className="relative w-full max-w-4xl mx-auto h-px my-6">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent blur-[2px]" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
      </div>

      <section id="about" className="py-12 lg:py-16 relative">
        <AboutPage />
      </section>

      <div className="relative w-full max-w-4xl mx-auto h-px my-6">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent blur-[2px]" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
      </div>

      <section id="skills" className="py-12 lg:py-16 relative">
        <SkillsSection />
      </section>

      <div className="relative w-full max-w-4xl mx-auto h-px my-6">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent blur-[2px]" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
      </div>

      <section id="projects" className="py-12 lg:py-16 relative">
        <ProjectsPage />
      </section>

      <div className="relative w-full max-w-4xl mx-auto h-px my-6">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent blur-[2px]" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
      </div>

      <section id="contact" className="pt-12 lg:pt-16 relative">
        <ContactPage />
      </section>

      {/* کامپوننت دکمه بازگشت به بالا */}
      <ScrollToTop />

    </main>
  );
};

export default Home;