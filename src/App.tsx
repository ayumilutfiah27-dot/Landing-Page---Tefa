import CartProvider from "./store/CartContext";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Features from "./components/Features";
import Menu from "./components/Menu";
import Parallax from "./components/Parallax";
import Testimonial from "./components/Testimonial";
import Stats from "./components/Stats";
import Faq from "./components/Faq";
import OrderCta from "./components/OrderCta";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import Toasts from "./components/Toasts";

const flavorRibbon = [
  "Classic Choco Chip",
  "Matcha White Chocolate",
  "Red Velvet Cheese",
  "Double Choco Fudge",
  "Salted Caramel Pecan",
  "Almond Cashew Crunch",
  "Dipanggang Segar Setiap Pagi",
];

const giftRibbon = [
  "Hampers Eksklusif",
  "Gratis Kartu Ucapan",
  "Pengiriman Same-Day",
  "Pesanan Korporat",
  "Tanpa Pengawet",
  "Program Reseller",
];

export default function App() {
  return (
    <CartProvider>
      <Preloader />
      <ScrollProgress />
      <div className="min-h-screen overflow-x-clip bg-cream-100">
        <Navbar />
        <main>
          <Hero />
          <Marquee items={flavorRibbon} tone="pine" />
          <Features />
          <Menu />
          <Parallax />
          <Testimonial />
          <Stats />
          <Faq />
          <Marquee
            items={giftRibbon}
            tone="gold"
            reverse
            icon="sparkle"
          />
          <OrderCta />
        </main>
        <Footer />
        <FloatingActions />
        <Toasts />
      </div>
    </CartProvider>
  );
}
