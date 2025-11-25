import CartEmpty from "./CartView/CartEmpty";
import CartList from "./CartView/CartList";
import CartSummary from "./CartView/CartSummary";

export default function CartView({ cart, onUpdateQuantity, onRemove, onCheckout, onBrowse }) {
  
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = 3.99;

  if (cart.length === 0) {
    return <CartEmpty onBrowse={onBrowse} />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Your Shopping Cart</h2>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

        <CartList 
          cart={cart}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />

        <CartSummary 
          cartTotal={cartTotal}
          shipping={shippingCost}
          onCheckout={onCheckout}
        />
      </div>
    </div>
  );
}
