import CartItem from "./CartItem";

export default function CartList({ cart, onUpdateQuantity, onRemove }) {
  return (
    <ul className="divide-y divide-gray-200">
      {cart.map(item => (
        <CartItem 
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
