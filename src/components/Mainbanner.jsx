const Mainbanner = () => {
  return (
    <div className="bg-[#FFFAE0] w-full h-[760px] p-[24px] flex justify-center items-center">
      <div className="w-[470px] ml-[60px]">
        <div>
          <div className="text-[54px] font-bold leading-[73px] mb-10">
            <h1>당신 근처의</h1>
            <h3 className="w-fit">지역 생활 커뮤니티</h3>
          </div>
          <div className="text-[20px] font-normal text-[#7c7c7c] leading-[30px] mb-[40px]">
            <h5>동네라서 가능한 모든 것</h5>
            <h5>당근에서 가까운 이웃과 함께해요.</h5>
          </div>
        </div>
        <div className="flex">
          <div className="hover:cursor-pointer hover:bg-orange-600 w-[180px] h-[56px] bg-[#FF6F0F] text-center text-[16px] font-bold flex justify-center items-center text-white no-underline mr-4 rounded-[10px]">
            <img
              className="w-[22px] h-[22px] mr-[8px]"
              src="./images/google.svg"
              alt="google"
            />
            Google Play
          </div>
          <div className="hover:cursor-pointer hover:bg-orange-600 w-[180px] h-[56px] bg-[#FF6F0F] text-center text-[16px] font-bold flex justify-center items-center text-white no-underline rounded-[10px]">
            <img
              className="w-[22px] h-[22px] mr-[8px]"
              src="./images/apple.svg"
              alt="apple"
            />
            App Store
          </div>
        </div>
      </div>
      <div className="w-[655px] h-[800px]">
        <img src="./images/daangn-ch.webp" alt="daangn-ch" />
      </div>
    </div>
  );
};

export default Mainbanner;
