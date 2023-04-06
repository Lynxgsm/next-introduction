"use client";

import Button from "@/components/Button";
import { states } from "@/states";
import { Product } from "@/types/Product";
import Link from "next/link";
import { FC } from "react";
import { useSnapshot } from "valtio";

const CartProductCard: FC<Product> = (product) => {
  const { id, name, price } = product;
  
  const { removeProductFromCart } = useSnapshot(states);
  return (
    <div className="border-2 p-4">
      <Link href={`/product/${id}`} className="mb-8 block">
        <h4>
          {name} <span className="text-purple-400">x 2</span>
        </h4>
        <p>{price}$</p>
      </Link>
      <Button
        onClick={() => {
          removeProductFromCart(product.id);
        }}
      >
        Remove from cart
      </Button>
    </div>
  );
};

export default CartProductCard;
