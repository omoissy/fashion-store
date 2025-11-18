"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  colors?: string[];
}

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  badge,
  colors = [],
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-lg">
          <Image
            src={image}
            alt={name}
            fill
            className={`object-cover transition-transform duration-300 ${
              isHovered ? "scale-105" : ""
            }`}
          />
          {badge && (
            <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
              {badge}
            </div>
          )}
          {originalPrice && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{discount}%
            </div>
          )}
          <div
            className={`absolute bottom-2 left-2 right-2 flex gap-2 transition-opacity ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsWishlisted(!isWishlisted);
              }}
              className={`flex-1 py-2 px-4 rounded text-sm font-medium transition-colors ${
                isWishlisted
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              <Heart
                className={`w-4 h-4 inline mr-1 ${
                  isWishlisted ? "fill-current" : ""
                }`}
              />
              Wishlist
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic
              }}
              className="flex-1 py-2 px-4 bg-black text-white rounded text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <ShoppingBag className="w-4 h-4 inline mr-1" />
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <div className="mt-3">
        <Link href={`/product/${id}`}>
          <h3 className="font-medium text-gray-900 hover:text-gray-600 transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-bold">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        {colors.length > 0 && (
          <div className="flex gap-1 mt-2">
            {colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
            {colors.length > 4 && (
              <span className="text-xs text-gray-500">+{colors.length - 4}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

