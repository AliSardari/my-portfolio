import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <main className="min-h-screen  text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;