const Subbannerone = () => {
  return (
    <div className="flex justify-center items-center w-full h-[760px]">
      <div className="w-[655px] h-[750px]">
        <img src="./images/rebranded.webp" alt="rebranded" />
      </div>
      <div className="w-[360px]">
        <div className="text-[18px] text-[#FF6F0F] font-bold mb-[10px]">
          중고거래
        </div>
        <div className="text-[42px] font-bold leading-[57px] mb-10">
          <h1>믿을만한</h1>
          <h3>이웃 간 중고거래</h3>
        </div>
        <div className="text-[20px] font-normal text-[#7c7c7c] leading-[30px] mb-[40px]">
          <h5>동네 주민들과 가깝고 따뜻한 거래를</h5>
          <h5>지금 경험해보세요</h5>
        </div>
        <div className="text-[18px] leading-[23.76px] font-bold text-[#212529]">
          <div className="bg-gray-200 p-[12px] rounded-[6px] w-fit hover:cursor-pointer hover:bg-gray-300">
            인기매물 보기
          </div>
          <div className="bg-gray-200 p-[12px] rounded-[6px] w-fit hover:cursor-pointer hover:bg-gray-300">
            믿을 수 있는 중고거래
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subbannerone;
