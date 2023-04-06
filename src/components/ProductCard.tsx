"use client";

import Button from "@/components/Button";
import { states } from "@/states";
import { Product } from "@/types/Product";
import Link from "next/link";
import { FC } from "react";
import { useSnapshot } from "valtio";

const ProductCard: FC<Product> = (product) => {
  const { id, name, price } = product;
  const { addProductToCart } = useSnapshot(states);
  return (
    <div className="border-2 p-4">
      <Link href={`/product/${id}`} className="mb-8 block">
        <h4>{name}</h4>
        <p>{price}$</p>
      </Link>
      <Button
        onClick={() => {
          addProductToCart(product);
        }}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
