import "@/styles/main.css";
import TopBar from "@/components/TopBar";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-primary">
      <TopBar />
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
