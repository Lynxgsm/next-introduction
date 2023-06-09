import Image from "next/image";
import { prismaClient } from "../../../../lib/prisma";
import Button from "@/components/Button";
import UpdateProductForm from "../components/UpdateProductForm";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await prismaClient.product.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">
        Product Page of <span className="font-bold">{product?.name}</span>
      </h2>
      <div className="flex gap-4">
        <div className="flex-1">
          {product && (
            <Image
              width={200}
              height={200}
              className="w-64 h-64 object-cover my-2"
              src={product.image}
              alt={product.name}
            />
          )}
          <p>{product?.price}$</p>
          <Button>Add to cart</Button>
        </div>
        {product && <UpdateProductForm {...product} />}
      </div>
    </div>
  );
};

export default ProductPage;
