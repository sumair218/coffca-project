import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductRow({ title, items, onAddToCart }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <h2 className="text-center font-serif text-2xl text-stone-900 mb-8">{title}</h2>
      <div className="flex items-center gap-3 sm:gap-4">
        <button type="button" aria-label="Scroll left" className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-stone-200 items-center justify-center hover:bg-stone-300 transition-colors">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide">
          {items.map((item) => <ProductCard key={item.image} item={item} onAddToCart={onAddToCart} />)}
        </div>
        <button type="button" aria-label="Scroll right" className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-stone-200 items-center justify-center hover:bg-stone-300 transition-colors">
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}