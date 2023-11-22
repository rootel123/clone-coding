const Subbannertwo = () => {
  return (
    <div className="bg-[#FFF8F1] flex justify-center items-center w-full h-[760px]">
      <div className="w-[380px]">
        <div className="text-[18px] text-[#FF6F0F] font-bold mb-[10px]">
          동네생활
        </div>
        <div className="text-[42px] font-bold leading-[57px] mb-10">
          <h1>이웃만 아는</h1>
          <h3>동네 정보와 이야기</h3>
        </div>
        <div className="text-[20px] font-normal text-[#7c7c7c] leading-[30px] mb-[40px]">
          <h5>우리동네의 다양한 정보와 이야기를</h5>
          <h5>공감과 댓글로 나누어요.</h5>
        </div>
        <div className="flex justify-between">
          <div>
            <img src="./images/icon1.svg" alt="icon1" />
            <div className="text-base my-2">동네모임</div>
            <div className="text-[12px] text-[#7c7c7c]">
              <h1 className="text-[12px]">근처 이웃들과 동네</h1>
              <h3 className="text-[12px]">이야기를 해보세요.</h3>
            </div>
          </div>
          <div>
            <div>
              <img src="./images/icon2.svg" alt="icon2" />
              <div className="text-base my-2">동네질문</div>
              <div className="text-[12px] text-[#7c7c7c]">
                <h1>궁금한 게 있을 땐</h1>
                <h3>이웃에 물어보세요.</h3>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="./images/icon3.svg" alt="icon3" />
              <div className="text-base my-2">동네분실센터</div>
              <div className="text-[12px] text-[#7c7c7c]">
                <h1>무언가를 잃어버렸다</h1>
                <h1>면</h1>
                <h3>글을 올려보세요.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[655px] h-[750px]">
        <img src="./images/rebranded2.webp" alt="rebranded2" />
      </div>
    </div>
  );
};

export default Subbannertwo;
