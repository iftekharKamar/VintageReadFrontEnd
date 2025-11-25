import { ShoppingCart } from "lucide-react";

export default function CartEmpty({ onBrowse }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="bg-white rounded-xl border border-dashed border-gray-300 p-12">
        <ShoppingCart className="h-16 w-16 mx-auto text-gray-300 mb-4" />
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't found a story yet.</p>

        <button 
          onClick={onBrowse}
          className="bg-amber-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-900 transition"
        >
          Start Browsing
        </button>
      </div>
    </div>
  );
}
