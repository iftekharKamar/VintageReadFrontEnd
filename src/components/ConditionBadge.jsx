import React from 'react';

export default function ConditionBadge({ condition }) {
  let colorClass = "bg-gray-100 text-gray-800";
  
  if (condition === "Like New" || condition === "Excellent") {
    colorClass = "bg-green-100 text-green-800 border-green-200";
  } else if (condition === "Good") {
    colorClass = "bg-blue-100 text-blue-800 border-blue-200";
  } else if (condition === "Fair" || condition === "Worn") {
    colorClass = "bg-orange-100 text-orange-800 border-orange-200";
  }

  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${colorClass}`}>
      {condition}
    </span>
  );
}