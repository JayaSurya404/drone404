"use client";

import Link from "next/link";
import { Heart, Plus, Star } from "lucide-react";
import { useState } from "react";

export interface ProductCardData {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  deliveryMinutes: number;
  imageLabel: string;
  featured?: boolean;
}

interface ProductCardProps {
  product: ProductCardData;
}

export function ProductCard({ product }: ProductCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.04]">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.03] to-violet-400/[0.08]">
        <div className="absolute inset-0 grid-background opacity-20" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.06] px-4 text-center text-xs font-medium text-white/50 backdrop-blur-xl">
            {product.imageLabel}
          </div>
        </div>

        {product.featured ? (
          <span className="absolute left-3 top-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-[10px] font-semibold text-cyan-300">
            Featured
          </span>
        ) : null}

        <button
          type="button"
          aria-label={liked ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          onClick={() => setLiked((value) => !value)}
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl border backdrop-blur-xl transition ${
            liked
              ? "border-pink-300/20 bg-pink-300/10 text-pink-300"
              : "border-white/10 bg-black/20 text-white/60 hover:text-white"
          }`}
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300/70">
          {product.category}
        </p>

        <Link href={`/product/${product.slug}`} className="block">
          <h3 className="mt-1.5 line-clamp-1 text-sm font-semibold text-white transition group-hover:text-cyan-200">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
          <span className="text-xs font-medium text-white/70">
            {product.rating.toFixed(1)}
          </span>
          <span className="text-xs text-white/35">
            ({product.reviewCount})
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-lg font-semibold text-white">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <p className="mt-0.5 text-[11px] text-cyan-300/70">
              Est. {product.deliveryMinutes} min delivery
            </p>
          </div>

          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300 text-slate-950 transition hover:bg-cyan-200"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
