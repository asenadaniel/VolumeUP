
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutClientWrapper({ children }) {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}