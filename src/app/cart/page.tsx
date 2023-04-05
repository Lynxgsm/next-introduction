"use client";

import { states } from "@/states";
import { useSnapshot } from "valtio";
import CartProductCard from "./components/CartProduct";

const CartPage = () => {
  const { productsInCart, getCartTotal } = useSnapshot(states);
  return (
    <div className="flex w-full">
      <div className="w-2/3 border-r-2 pr-4">
        {productsInCart.length > 0 ? (
          <div className="grid grid-cols-3 gap-8">
            {productsInCart.map((product) => (
              <CartProductCard {...product} key={product.id} />
            ))}
          </div>
        ) : (
          <p>There is no product yet.</p>
        )}
      </div>
      <div className="w-1/3 pl-4">
        <h4>
          Total of <span>{productsInCart.length}</span> products
        </h4>
        <h4>
          You will be billed for: <span>{getCartTotal()}</span>$
        </h4>
      </div>
    </div>
  );
};

export default CartPage;
