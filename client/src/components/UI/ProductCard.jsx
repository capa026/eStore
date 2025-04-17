const ProductCard = ({ product }) => {
  return (
    <div
      className="flex flex-col items-center border border-black/20 rounded-lg shadow-around cursor-pointer w-48
      hover:scale-110  hover:bg-gray-300 transition-all duration-200
    "
    >
      <img
        src={product.image_url}
        alt={product.name}
        className="w-32 aspect-square m-4 rounded-md"
      />
      <h2 className="text-center mx-4 mb-4">{product.name}</h2>
    </div>
  );
};

export default ProductCard;
