"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const AddProductForm = () => {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const input: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      input[key] = String(value);
    });

    const response = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(input),
    });

    const data = await response.json();

    if (response.status !== 201) {
      throw new Error(data.message);
    }

    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2">
      {["name", "price", "image"].map((name) => (
        <input
          className="px-2 py-2 capitalize text-black rounded-md"
          key={name}
          type="text"
          placeholder={name}
          name={name}
          required
        />
      ))}
      <Button type="submit">Add new product</Button>
    </form>
  );
};

export default AddProductForm;
