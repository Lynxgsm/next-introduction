import { Product } from "@/types/Product"
import { states } from ".";

export type CartStateProps = {
    productsInCart: Product[];
    addProductToCart(product: Product): void;
    removeProductFromCart(id: string): void;
    getCartTotal(): number;
}

export const CartState: CartStateProps = {
    productsInCart: [],
    addProductToCart: (product) => {
        states.productsInCart = [product, ...states.productsInCart]
    },
    getCartTotal: () => {
        return states.productsInCart.reduce((acc, product) => {
            const price = parseFloat(product.price);
            return acc + price;
        }, 0)
    },
    removeProductFromCart: (id) => {
        states.productsInCart = states.productsInCart.filter((product) => product.id !== id)
    }
}