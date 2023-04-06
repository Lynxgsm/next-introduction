"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

const AddProductForm = () => {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const input: { [key: string]: string } = {};
    data.forEach((value, key) => {
      input[key] = String(value);
    });

    fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .finally(() => {
        router.push("/");
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4 w-1/3">
      {["name", "price", "image"].map((label) => (
        <input
          type="text"
          className="p-2 capitalize text-black"
          name={label}
          placeholder={label}
          key={label}
        />
      ))}
      <Button type="submit">Add new product</Button>
    </form>
  );
};

export default AddProductForm;
