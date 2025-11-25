import { Trash2 } from "lucide-react";
import ConditionBadge from "../ConditionBadge";

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <li className="p-6 flex flex-col sm:flex-row items-center sm:justify-between">
      
      {/* Product Info */}
      <div className="flex items-center w-full sm:w-auto mb-4 sm:mb-0">
        <img 
          src={item.image} 
          alt={item.title} 
          className="h-24 w-16 object-cover rounded shadow-sm border border-gray-100" 
        />
        
        <div className="ml-6">
          <h3 className="text-lg font-serif font-bold text-gray-900">{item.title}</h3>
          <p className="text-gray-500 text-sm mb-1">{item.author}</p>
          <ConditionBadge condition={item.condition} />
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between w-full sm:w-auto sm:space-x-8">
        
        {/* Quantity */}
        <div className="flex items-center border border-gray-300 rounded-md">
          <button 
            onClick={() => onUpdateQuantity(item.id, -1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 border-r border-gray-300"
            disabled={item.quantity <= 1}
          >-</button>

          <span className="px-3 py-1 text-sm font-medium w-8 text-center">
            {item.quantity}
          </span>

          <button 
            onClick={() => onUpdateQuantity(item.id, 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100 border-l border-gray-300"
          >+</button>
        </div>

        {/* Item Total Price */}
        <div className="font-bold text-gray-900 w-24 text-right">
          ${(item.price * item.quantity).toFixed(2)}
        </div>

        {/* Remove */}
        <button 
          onClick={() => onRemove(item.id)}
          className="text-gray-400 hover:text-red-500 transition p-2"
          title="Remove item"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </li>
  );
}
