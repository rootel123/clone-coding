const CarCard = ({ image, title, desc, price }) => {
  return (
    <div className="flex ml-16">
      <div>
        <img
          className="h-[140px] w-[140px] rounded-md object-cover"
          src={`./images/${image}.jpeg`}
          alt={image}
        />
      </div>
      <div className="w-[240px] flex flex-col ml-4">
        <span className="text-[#212124] text-[1.125rem] leading-[1.32] text-xl">
          {title}
        </span>
        <span className="my-2 text-[#868b94] text-[0.875rem] leading-[1.4] text-md">
          {desc}
        </span>
        <span className="text-[#212124] text-[1rem] leading-[1.36] font-bold text-xl">
          {price}
        </span>
      </div>
    </div>
  );
};

export default CarCard;
