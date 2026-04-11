import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Divider from "@/components/Divider";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import BookingCta from "@/components/BookingCta";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <TopBar />
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Testimonials />
      <Divider />
      <Services />
      <BookingCta />
      <Divider />
      <Faq />
      <Footer />
    </div>
  );
}
