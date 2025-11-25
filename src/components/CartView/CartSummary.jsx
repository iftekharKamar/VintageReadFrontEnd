import { ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";

export default function CartSummary({ cartTotal, shipping, onCheckout }) {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="bg-gray-50 p-8 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row justify-end">
        <div className="w-full sm:w-80 space-y-3">
          
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <div className="flex justify-between pt-4 border-t border-gray-200">
            <span className="text-xl font-bold text-gray-900">Total</span>
            <span className="text-xl font-bold text-amber-800">
              ${(cartTotal + shipping).toFixed(2)}
            </span>
          </div>

          <button 
            onClick={() => {
              if (!user) return onCheckout();
              alert("Order placed successfully!");
              
            }}
            className="w-full bg-amber-800 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-900 transition flex items-center justify-center shadow-lg mt-6"
          >
            Proceed to Checkout
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
