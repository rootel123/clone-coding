const Subbannerfour = () => {
  return (
    <div className="bg-[#FFF8F1] flex justify-center items-center w-full h-[760px]">
      <div className="w-[380px]">
        <div className="text-[18px] text-[#FF6F0F] font-bold mb-[10px]">
          동네업체
        </div>
        <div className="text-[42px] font-bold leading-[57px] mb-10">
          <h1>내 근처에서 찾는</h1>
          <h3>동네업체</h3>
        </div>
        <div className="text-[20px] font-normal text-[#7c7c7c] leading-[30px] mb-[40px]">
          <h5>이웃들의 추천 후기를 확인하고</h5>
          <h5>동네 곳곳의업체들을 찾을 수 있어요.</h5>
        </div>
        <div className="text-[18px] leading-[23.76px] font-bold text-[#212529]">
          <div className="bg-gray-200 p-[12px] rounded-[6px] w-fit hover:cursor-pointer hover:bg-gray-300">
            당근 동네업체 보기
          </div>
        </div>
      </div>
      <div className="w-[655px] h-[750px]">
        <img src="./images/business.webp" alt="business" />
      </div>
    </div>
  );
};

export default Subbannerfour;
