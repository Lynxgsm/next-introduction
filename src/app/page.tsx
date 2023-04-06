import ProductCard from "../components/ProductCard";
import { prismaClient } from "../../lib/prisma";

export default async function Home() {
  const products = await prismaClient.product.findMany({});
  return (
    <section>
      <h1 className="text-4xl">Here are our products</h1>
      <div className="grid grid-cols-3 gap-8 mt-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
