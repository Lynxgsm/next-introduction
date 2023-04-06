"use client";

import Button from "@/components/Button";
import { states } from "@/states";
import { Product } from "@/types/Product";
import Link from "next/link";
import { FC } from "react";
import { useSnapshot } from "valtio";
import { FiEdit } from "react-icons/fi";

const ProductCard: FC<Product> = (product) => {
  const { id, name, price } = product;
  const { addProductToCart } = useSnapshot(states);
  return (
    <div className="border-2 p-4">
      <div className="mb-8 flex justify-between">
        <Link href={`/product/${id}`}>
          <h4>{name}</h4>
          <p>{price}$</p>
        </Link>
        <div>
          <Link href="/product/update">
            <FiEdit size={24} />
          </Link>
        </div>
      </div>
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
