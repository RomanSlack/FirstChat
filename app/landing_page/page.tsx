import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import FeatureDisplay from "../../components/FeatureDisplay";
import Footer from "../../components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeatureDisplay />
      <Footer />
    </main>
  );
}