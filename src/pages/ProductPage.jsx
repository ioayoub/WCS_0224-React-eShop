import { useLoaderData } from "react-router-dom";

export default function ProductPage() {
  const product = useLoaderData();

  const { name, picture_resized, description, price } = product;

  return (
    <>
      <h1 className="text-3xl text-center my-12 ">{name}</h1>
      <div className="flex justify-around ">
        <img src={picture_resized} alt={`image of ${name}`} className="w-2/4" />

        <div className="w-1/3 h-full my-auto">
          <p>{description}</p>
          <span className="font-bold text-xl text-end my-12">{price}</span>
        </div>
      </div>
    </>
  );
}
