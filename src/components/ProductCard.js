const ProductCard = ({ name, prevPrice, newPrice, img }) => (
    <div>
      <div className="flex items-center justify-center border-yellow-600 shadow-lg rounded-full">
      <img src={img} alt={name} />
      </div>
      <div>
        <p className="text-xl font-normal text-yellow-600 mb-2">{name}</p>
        <div className="flex items-center justify-center gap-4">
        <p className="text-[14px] font-normal text-white line-through">{prevPrice}</p>
        <p className="text-[14px] font-normal text-white">{newPrice}</p>
        </div>
      </div>
    </div>
  );
  
  export default ProductCard;
  