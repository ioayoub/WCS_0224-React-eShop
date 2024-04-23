import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

export default function CardList() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://ioayoub.fr/api/eshop")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center">
        {products && products.map((p) => <Card key={p.id} product={p} />)}
      </div>
    </>
  );
}
