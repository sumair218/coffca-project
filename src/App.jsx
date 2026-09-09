import React, { useEffect, useMemo, useState } from "react";
import {
  Cake,
  Coffee,
  CupSoda,
  Facebook,
  GlassWater,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Star,
  Twitter,
  X,
} from "lucide-react";
import ProductRow from "./components/ProductRow";
import appleIcon from "./assets/icon/icons8-apple-inc-48.png";
import googleIcon from "./assets/icon/icons8-google-48.svg";
import {
  categories,
  footerColumns,
  images,
  navLinks,
  productSections,
  testimonials,
} from "./data/siteData";

const categoryIcons = { coffee: Coffee, cup: CupSoda, glass: GlassWater, cake: Cake };
const pageVideoSequence = {
  Home: [0, 1, 2, 3],
  Coffee: [1, 2, 3, 0],
  Bakery: [4, 0, 3, 2],
  Shop: [0, 1, 2, 3],
  About: [1, 3, 2, 0],
  Login: [2, 1, 3, 0],
};
const pageByPath = {
  "/": "Home",
  "/coffee": "Coffee",
  "/bakery": "Bakery",
  "/shop": "Shop",
  "/about": "About",
  "/login": "Login",
  "/cart": "Cart",
};

function pathForPage(page) {
  return page === "Home" ? "/" : `/${page.toLowerCase()}`;
}

function Header({ currentPage, onNavigate, cartCount, menuOpen, setMenuOpen }) {
  return (
    <nav className="absolute z-20 inset-x-0 max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="flex items-center justify-between">
        <button type="button" onClick={() => onNavigate("Home")} className="font-serif text-2xl text-white">coffca</button>

        <ul className="hidden md:flex items-center gap-8 text-sm text-white/90">
          {navLinks.map((link) => (
            <li key={link}>
              <button type="button" onClick={() => onNavigate(link)} className={currentPage === link ? "text-white font-medium" : "hover:text-white transition-colors"}>
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button type="button" aria-label="Search" onClick={() => onNavigate("Shop")} className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
            <Search size={16} className="text-stone-800" />
          </button>
          <button type="button" aria-label={`Open cart with ${cartCount} items`} onClick={() => onNavigate("Cart")} className="relative w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
            <ShoppingBag size={16} className="text-stone-800" />
            {cartCount > 0 && <span className="absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full bg-amber-500 text-[10px] leading-4 text-stone-950">{cartCount}</span>}
          </button>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 rounded-2xl border border-white/20 bg-black/35 backdrop-blur-sm p-3 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => {
                onNavigate(link);
                setMenuOpen(false);
              }}
              className={`block w-full text-left rounded-lg px-3 py-2 text-sm ${currentPage === link ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/5 hover:text-white"}`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer className="relative bg-[#241712] text-stone-300 overflow-hidden">
      <img src={images.footerBeans} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
      <div className="relative max-w-6xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-6 gap-8">
        <button type="button" onClick={() => onNavigate("Home")} className="col-span-2 md:col-span-1 text-left font-serif text-xl text-white">coffca</button>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="text-xs tracking-wide text-stone-400 mb-3">{column.title}</p>
            <ul className="space-y-2 text-sm">
              {column.links.map((link) => (
                <li key={link}>
                  <button type="button" onClick={() => onNavigate(link === "Shop" ? "Shop" : "About")} className="hover:text-white transition-colors">{link}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="text-xs tracking-wide text-stone-400 mb-3">Social Media</p>
          <div className="flex gap-3"><Twitter size={16} /><Instagram size={16} /><Facebook size={16} /><Linkedin size={16} /></div>
        </div>
      </div>
    </footer>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section className="bg-[#E4DCC8]">
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h2 className="font-serif text-2xl text-stone-900">Join in and get 15% off!</h2>
        <p className="text-sm text-stone-600 mt-2">Subscribe to our newsletter to get 15% off discount code.</p>
        <form onSubmit={(event) => event.preventDefault()} className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-3 w-full sm:w-72">
            <Mail size={16} className="text-stone-400" />
            <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email address" className="bg-transparent outline-none text-sm w-full text-stone-700 placeholder:text-stone-400" />
          </div>
          <button type="submit" className="bg-[#3B1F14] text-white text-sm px-6 py-3 rounded-full hover:bg-[#2a1610] transition-colors w-full sm:w-auto">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

function Hero({ title, eyebrow, description, onNavigate, videoSequence = [0] }) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    if (videoSequence.length <= 1) {
      setActiveVideoIndex(0);
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveVideoIndex((currentIndex) => (currentIndex + 1) % videoSequence.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [videoSequence]);

  const currentVideoIndex = videoSequence[activeVideoIndex] ?? videoSequence[0];

  return (
    <section className="relative min-h-[480px] flex items-center">
      <video
        key={currentVideoIndex}
        autoPlay
        muted
        loop
        playsInline
        onLoadedMetadata={(event) => {
          event.currentTarget.playbackRate = 1.5;
        }}
        aria-label="Coffee being prepared"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={images.heroVideos[currentVideoIndex]} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative max-w-6xl mx-auto w-full px-6 pt-20 pb-16">
        <p className="text-white/70 text-sm tracking-wide mb-4">{eyebrow}</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight max-w-xl">{title}</h1>
        <p className="text-white/70 mt-5 max-w-sm text-sm leading-relaxed">{description}</p>
        <button type="button" onClick={() => onNavigate("Shop")} className="mt-8 bg-white text-stone-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-stone-100 transition-colors">Explore menu</button>
      </div>
    </section>
  );
}

function CategoryStrip({ onNavigate }) {
  return (
    <div className="bg-[#E4DCC8]">
      <div className="max-w-4xl mx-auto px-6 py-8 flex items-center justify-around flex-wrap gap-6">
        {categories.map(({ icon, label }) => {
          const Icon = categoryIcons[icon];
          return <button type="button" key={label} onClick={() => onNavigate(label === "Dessert" ? "Bakery" : "Coffee")} className="flex flex-col items-center gap-2 text-stone-700 hover:text-stone-950"><Icon size={26} strokeWidth={1.5} /><span className="text-sm">{label}</span></button>;
        })}
      </div>
    </div>
  );
}

function Testimonials() {
  const [activeDot, setActiveDot] = useState(0);
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h2 className="font-serif text-2xl text-stone-900 mb-10">Come and Join<br />Our Happy Customers</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.name + index} className={`text-left p-6 rounded-xl border ${index === 1 ? "bg-white border-stone-200 shadow-sm" : "border-transparent"}`}>
            <div className="flex items-center gap-3"><img src={images.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" /><div><p className="text-sm font-medium text-stone-900">{testimonial.name}</p><p className="text-xs text-stone-500">{testimonial.role}</p></div></div>
            <div className="flex gap-0.5 mt-3">{Array.from({ length: 5 }).map((_, star) => <Star key={star} size={14} className={star < testimonial.stars ? "fill-amber-400 text-amber-400" : "text-stone-300"} />)}</div>
            <p className="text-sm text-stone-500 mt-3 leading-relaxed">A warm cup, thoughtful service, and a place worth returning to.</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-8">{[0, 1, 2].map((dot) => <button type="button" key={dot} aria-label={`Go to slide ${dot + 1}`} onClick={() => setActiveDot(dot)} className={`w-2 h-2 rounded-full ${activeDot === dot ? "bg-stone-800" : "bg-stone-300"}`} />)}</div>
    </section>
  );
}

function HomePage({ onNavigate, onAddToCart }) {
  return <><Hero videoSequence={pageVideoSequence.Home} eyebrow="Welcome" title="We serve the richest coffee in the city!" description="Freshly roasted coffee, handmade bakery treats, and a welcoming place to slow down." onNavigate={onNavigate} /><CategoryStrip onNavigate={onNavigate} />{productSections.map((section) => <ProductRow key={section.title} {...section} onAddToCart={onAddToCart} />)}<section className="relative bg-[#E4DCC8] overflow-hidden"><div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8"><div><h2 className="font-serif text-3xl text-stone-900 leading-snug max-w-sm">Check Out Our Best Coffee Beans</h2><button type="button" onClick={() => onNavigate("Shop")} className="mt-6 bg-[#3B1F14] text-white text-sm px-6 py-3 rounded-full hover:bg-[#2a1610]">Explore our products</button></div><img src={images.beansBanner} alt="Coffee beans" className="w-full md:w-96 h-48 object-cover rounded-lg" /></div></section><Testimonials /><Newsletter /></>;
}

function ListingPage({ page, onNavigate, onAddToCart }) {
  const sections = page === "Shop" ? productSections : productSections.filter((section) => page === "Coffee" ? section.title.includes("Coffee") : section.title.includes("Dessert"));
  return <><Hero videoSequence={pageVideoSequence[page]} eyebrow={page} title={page === "Shop" ? "Everything you love, ready to order." : page === "Coffee" ? "Coffee made for your kind of day." : "Freshly baked comfort, made daily."} description="Explore our menu, made with quality ingredients and served with care." onNavigate={onNavigate} /><main className="max-w-6xl mx-auto px-6 py-12">{sections.map((section) => <ProductRow key={section.title} {...section} onAddToCart={onAddToCart} />)}</main><Newsletter /></>;
}

function AboutPage({ onNavigate }) {
  return <><Hero videoSequence={pageVideoSequence.About} eyebrow="Our story" title="A neighborhood coffee place with a generous heart." description="Coffca brings careful roasting, simple food, and good company together under one roof." onNavigate={onNavigate} /><section className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center"><img src={images.beansBanner} alt="Roasted coffee beans" className="w-full h-80 object-cover rounded-xl" /><div><p className="text-sm uppercase tracking-[0.2em] text-stone-500">Since 2012</p><h2 className="font-serif text-3xl text-stone-900 mt-3">Good coffee is better shared.</h2><p className="text-stone-600 leading-relaxed mt-5">We source thoughtfully, bake in small batches, and create a calm place where every visit feels familiar.</p><button type="button" onClick={() => onNavigate("Shop")} className="mt-6 bg-[#3B1F14] text-white px-6 py-3 rounded-full text-sm">Visit our menu</button></div></section><Testimonials /></>;
}

function CartPage({ cart, onChangeQuantity, onNavigate }) {
  const total = cart.reduce((sum, item) => sum + Number.parseInt(item.price.replace(/[^0-9]/g, ""), 10) * item.quantity, 0);
  return <main className="max-w-4xl mx-auto px-6 py-28"><h1 className="font-serif text-4xl text-stone-900">Your cart</h1>{cart.length === 0 ? <div className="bg-white rounded-xl p-10 mt-8 text-center"><ShoppingBag className="mx-auto text-stone-400" /><p className="text-stone-600 mt-4">Your cart is empty.</p><button type="button" onClick={() => onNavigate("Shop")} className="mt-6 bg-[#3B1F14] text-white px-6 py-3 rounded-full text-sm">Browse the menu</button></div> : <div className="mt-8 space-y-4">{cart.map((item) => <div key={item.image} className="bg-white rounded-xl p-4 flex items-center gap-4"><img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" /><div className="flex-1"><h2 className="font-serif text-lg text-stone-900">{item.name}</h2><p className="text-sm text-stone-500">{item.price}</p></div><div className="flex items-center gap-3"><button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => onChangeQuantity(item, -1)} className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center"><Minus size={14} /></button><span>{item.quantity}</span><button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => onChangeQuantity(item, 1)} className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center"><Plus size={14} /></button></div></div>)}<div className="bg-[#E4DCC8] rounded-xl p-6 flex items-center justify-between"><span className="font-serif text-xl">Total</span><strong className="text-xl">Rs. {total}</strong></div><button type="button" onClick={() => onNavigate("Login")} className="w-full bg-[#3B1F14] text-white py-3 rounded-full">Continue to checkout</button></div>}</main>;
}

function LoginPage({ onNavigate }) {
  const [mode, setMode] = useState("signin");
  const [message, setMessage] = useState("");
  const submit = (event) => { event.preventDefault(); setMessage(mode === "signin" ? "You are signed in for this demo." : "Your account has been created for this demo."); };
  const providerLogin = (provider) => setMessage(`${provider} sign in is ready to connect to your authentication provider.`);
    return <><Hero videoSequence={pageVideoSequence.Login} eyebrow="Welcome back" title="Your favourite coffee is waiting." description="Sign in or create an account to keep track of orders and discover something new." onNavigate={onNavigate} /><main className="flex items-center justify-center px-6 py-20"><div className="bg-white w-full max-w-md rounded-xl shadow-sm p-8"><div className="flex gap-6 border-b border-stone-200"><button type="button" onClick={() => { setMode("signin"); setMessage(""); }} className={`pb-3 text-sm ${mode === "signin" ? "border-b-2 border-stone-900 text-stone-900" : "text-stone-500"}`}>Sign in</button><button type="button" onClick={() => { setMode("signup"); setMessage(""); }} className={`pb-3 text-sm ${mode === "signup" ? "border-b-2 border-stone-900 text-stone-900" : "text-stone-500"}`}>Sign up</button></div><h2 className="font-serif text-3xl text-stone-900 mt-6">{mode === "signin" ? "Sign in to Coffca" : "Create your account"}</h2><form onSubmit={submit}><label className="block text-sm text-stone-600 mt-8">Email<input type="email" required className="mt-2 w-full border border-stone-200 rounded-md px-4 py-3 outline-none focus:border-stone-500" /></label>{mode === "signup" && <label className="block text-sm text-stone-600 mt-4">Name<input type="text" required className="mt-2 w-full border border-stone-200 rounded-md px-4 py-3 outline-none focus:border-stone-500" /></label>}<label className="block text-sm text-stone-600 mt-4">Password<input type="password" required className="mt-2 w-full border border-stone-200 rounded-md px-4 py-3 outline-none focus:border-stone-500" /></label><button type="submit" className="mt-6 w-full bg-[#3B1F14] text-white py-3 rounded-full">{mode === "signin" ? "Sign in" : "Create account"}</button></form><div className="flex items-center gap-3 my-6 text-xs text-stone-400"><span className="h-px bg-stone-200 flex-1" />or<span className="h-px bg-stone-200 flex-1" /></div><div className="grid grid-cols-2 gap-3"><button type="button" onClick={() => providerLogin("Google")} className="border border-stone-200 py-3 rounded-full text-sm hover:bg-stone-50 flex items-center justify-center gap-2"><img src={googleIcon} alt="" className="w-4 h-4" />Google</button><button type="button" onClick={() => providerLogin("Apple")} className="border border-stone-200 py-3 rounded-full text-sm hover:bg-stone-50 flex items-center justify-center gap-2"><img src={appleIcon} alt="" className="w-4 h-4 object-contain" />Apple</button></div>{message && <p role="status" className="mt-5 text-sm text-green-700 bg-green-50 rounded-md p-3">{message}</p>}</div></main></>;
}

export default function App() {
  const [path, setPath] = useState(() => window.location.hash.replace("#", "") || window.location.pathname);
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPage = pageByPath[path] || "Home";

  useEffect(() => {
    const handleLocationChange = () => setPath(window.location.hash.replace("#", "") || window.location.pathname);
    window.addEventListener("hashchange", handleLocationChange);
    return () => window.removeEventListener("hashchange", handleLocationChange);
  }, []);

  const navigate = (page) => {
    setMenuOpen(false);
    window.location.hash = pathForPage(page);
  };
  const addToCart = (item) => {
    setCart((currentCart) => {
      const existing = currentCart.find((cartItem) => cartItem.image === item.image);
      if (existing) return currentCart.map((cartItem) => cartItem.image === item.image ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
      return [...currentCart, { ...item, quantity: 1 }];
    });
    navigate("Cart");
  };
  const changeQuantity = (item, amount) => {
    setCart((currentCart) => currentCart.map((cartItem) => cartItem.image === item.image ? { ...cartItem, quantity: cartItem.quantity + amount } : cartItem).filter((cartItem) => cartItem.quantity > 0));
  };
  const page = useMemo(() => {
    if (currentPage === "Home") return <HomePage onNavigate={navigate} onAddToCart={addToCart} />;
    if (["Coffee", "Bakery", "Shop"].includes(currentPage)) return <ListingPage page={currentPage} onNavigate={navigate} onAddToCart={addToCart} />;
    if (currentPage === "About") return <AboutPage onNavigate={navigate} />;
    if (currentPage === "Cart") return <CartPage cart={cart} onChangeQuantity={changeQuantity} onNavigate={navigate} />;
    return <LoginPage onNavigate={navigate} />;
  }, [currentPage, cart]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  return <div className="min-h-screen bg-[#F5F2EC] font-sans text-stone-800"><div className="relative"><Header currentPage={currentPage} onNavigate={navigate} cartCount={cartCount} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />{page}</div><Footer onNavigate={navigate} /></div>;
}
