
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Index;
