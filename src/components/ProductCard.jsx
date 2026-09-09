import { Heart } from "lucide-react";

export default function ProductCard({ item, onAddToCart }) {
  return (
    <article className="flex-shrink-0 w-52 sm:w-64 bg-white rounded-xl overflow-hidden shadow-sm">
      <div className="relative h-40 sm:h-48">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        <button
          type="button"
          aria-label={`Save ${item.name} to favorites`}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center"
        >
          <Heart size={16} className="text-stone-700" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg text-stone-900">{item.name}</h3>
        <p className="text-sm text-stone-500 mt-1 leading-snug">{item.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold text-stone-900">{item.price}</span>
          <button type="button" onClick={() => onAddToCart(item)} className="bg-[#3B1F14] text-white text-sm px-4 py-2 rounded-md hover:bg-[#2a1610] transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </article>
  );
}