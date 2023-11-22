const NearCard = ({ image, title, desc }) => {
  return (
    <div className="flex border-b-2 mt-16 h-[150px] hover:bg-gray-300 items-center pl-2 rounded-2xl">
      <div>
        <img
          className="w-[100px] h-[100px] rounded-full"
          src={`./images/${image}.jpeg`}
          alt={image}
        />
      </div>
      <div className="flex flex-col ml-8 text-[#212124]">
        <span className="text-[1.125rem] leading-[1.32] font-bold">
          {title}
        </span>
        <span className="w-[240px] text-[1rem] leading-[1.36] my-2 font-medium">
          {desc}
        </span>
      </div>
    </div>
  );
};

export default NearCard;
