"use client";

import { useState } from "react";

export default function ProductCard() {
  const [cart, setCart] = useState(0);
  const [buyNow, setBuyNow] = useState(0);
  const cost = 1499;

  return (
    <div className="flex flex-col gap-6 border-8 rounded-3xl border-fuchsia-800 p-4 sm:flex-row sm:items-center bg-purple-100 w-110">
      <img
        className="mx-auto block h-54 w-44 rounded-full object-cover sm:mx-0 sm:shrink-0 border border-fuchsia-800 border-5"
        src="https://rukminim3.flixcart.com/image/480/640/xif0q/watch/w/s/5/-watermarked-original-imahz8yf3ad6r6hz.jpeg?q=90&width=512"
        alt="RAGA Titan quartz watch"
      />
      <div className="space-y-4 text-center sm:text-left">
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-fuchsia-900">RAGA Titan</h2>
          <p className="font-medium text-gray-500">Quartz Watch</p>
          <p className="font-medium text-gray-500">₹{cost.toLocaleString("en-IN")}</p>
          <p className="text-sm text-gray-500">
            RAGA Titan watches are a versatile, elegant choice for everyday wear
            and special occasions.
          </p>
          <p className="text-sm text-gray-500">
            The sleek mesh strap is lightweight, comfortable, and modern.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
          <button
            type="button"
            onClick={() => setBuyNow((currentBuyNow) => currentBuyNow + 1)}
            className="rounded-full border bg-fuchsia-200 border-purple-500 px-4 py-2 text-purple-600 hover:border-fuchsia-200 hover:bg-purple-600 hover:text-white active:bg-purple-700"
          >
            Buy Now ({buyNow})
          </button>
          <button
            type="button"
            onClick={() => setCart((currentCart) => currentCart + 1)}
            className="rounded-full border bg-fuchsia-200 border-purple-500 px-4 py-2 text-purple-600 hover:border-fuchsia-200 hover:bg-purple-600 hover:text-white active:bg-purple-700"
          >
            Add to Cart ({cart})
          </button>
          <p className="text-lg font-bold text-fuchsia-700">Total: ₹{(buyNow + cart)*cost}</p>
        </div>
      </div>
    </div>
  );
}
