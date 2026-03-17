import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
  <main>
    <Hero/>
    <Products/>
    <Showcase/>
    <Features/>
    <Testimonials/>
    <CTA/>
    <Footer/>
  </main>
  );
}
