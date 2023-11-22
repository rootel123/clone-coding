const BannerCard = ({ image, title, desc, price }) => {
  return (
    <div className="w-[223px] h-[223px]">
      <div>
        <img
          className="rounded-lg"
          src={`./images/${image}.webp`}
          alt={image}
        />
      </div>
      <div className="flex flex-col mt-4">
        <span>{title}</span>
        <span className="font-semibold">{price}</span>
        <span>{desc}</span>
      </div>
    </div>
  );
};

export default BannerCard;
