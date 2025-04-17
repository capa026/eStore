import ProductCard from "@components/UI/ProductCard";
import { useEffect, useState } from "react";

const FetchByCategory = ({ category }) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchByCategory = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/products/" + category
        );
        const data = await response.json();

        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchByCategory();
  }, []);

  return (
    <div>
      {!data ? (
        <div />
      ) : (
        <div className="flex flex-wrap gap-12 justify-center">
          {data?.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchByCategory;
