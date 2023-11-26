import RealtyCard from "../components/RealtyCard";

const realtyData = [
  {
    image: "realty1",
    title: "투룸이상 300만원/1만원 - 인천광역시 남동구",
    desc: "만수동",
    price: "단기 300 / 1",
  },
  {
    image: "realty2",
    title: "아파트 1억 9,100만원 - 전라남도 목포시",
    desc: "석현동",
    price: "매매 1억 9,100",
  },
  {
    image: "realty3",
    title: "상가 500만원/60만원 - 해바라기 옷가게",
    desc: "부평동",
    price: "월세 500 / 60",
  },
  {
    image: "realty4",
    title: "아파트 6억 - 경기도 용인시 수지구",
    desc: "성복동",
    price: "전세 6억원",
  },
  {
    image: "realty5",
    title: "분리형 원룸 100만원/35만원 - 제주특별자치도 서귀포시",
    desc: "성산읍",
    price: "월세 100 / 35",
  },
  {
    image: "realty6",
    title: "오픈형 원룸 200만원/33만원 - 은하수빌 307호",
    desc: "대잠동",
    price: "월세 200 / 33",
  },
  {
    image: "realty7",
    title: "아파트 1,000만원/2,000만원 - 제주특별자치도 제주시",
    desc: "연동",
    price: "연세 1,000 / 2,000",
  },
  {
    image: "realty8",
    title: "아파트 3억 7,500만원 - 3단지",
    desc: "진접읍",
    price: "매매 3억 7,500",
  },
  {
    image: "realty9",
    title: "아파트 500만원/0만원 - 제주특별자치도 제주시",
    desc: "노형동",
    price: "연세 500 / 0",
  },
  {
    image: "realty10",
    title: "아파트 2억 4,000만원 - 부산광역시 사하구",
    desc: "하단동",
    price: "매매 2억 4,000",
  },
];

const realtyDataT = [
  {
    image: "realty11",
    title: "아파트 3억 4,000만원 - 울산시청 정문에서 1분",
    desc: "신정동",
    price: "매매 3억 4,000",
  },
  {
    image: "realty12",
    title: "아파트 3억 500만원 - 2호선 대구은행역 바로코앞",
    desc: "수성동4가",
    price: "매매 3억 500",
  },
  {
    image: "realty13",
    title: "투룸이상 500만원/40만원 - 2층",
    desc: "갈마동",
    price: "월세 500 / 40",
  },
  {
    image: "realty14",
    title: "분리형 원룸 500만원/50만원 - 4층",
    desc: "염리동",
    price: "월세 500 / 50",
  },
  {
    image: "realty15",
    title: "오픈형 원룸 200만원/25만원 - 수유역 도보 10분이내",
    desc: "번동",
    price: "월세 200 / 25",
  },
  {
    image: "realty16",
    title: "오픈형 원룸 100만원/0만원 - 제주특별자치도 제주시",
    desc: "노형동",
    price: "연세 100 / 0",
  },
  {
    image: "realty17",
    title: "투룸이상 8,000만원 - 예천읍",
    desc: "예천읍",
    price: "매매 8,000",
  },
  {
    image: "realty18",
    title: "오피스텔 2억 2,900만원 - 10층짜리 아파트",
    desc: "불로동",
    price: "매매 2억 2,900",
  },
  {
    image: "realty19",
    title: "분리형 원룸 8,500만원 - 연대서문 3분 거리",
    desc: "연희동",
    price: "전세 8,500",
  },
  {
    image: "realty20",
    title: "아파트 4억 - 대구광역시 동구",
    desc: "지묘동",
    price: "매매 4억원",
  },
];

const RealtyPage = () => {
  return (
    <>
      <div className="bg-[#d2edfa] h-[30rem] flex justify-center items-center">
        <div className="w-[400px] h-[259px] flex flex-col mt-[60px] ml-[40px]">
          <div className="text-[2.5rem] text-[#212124] font-bold leading-[1.5]">
            <h1>복비없이 투명한</h1>
            <h1>부동산 직거래</h1>
          </div>
          <div className="text-[1.325rem] text-[#212124] leading-[1.32] my-8">
            <h1>이웃이 살던 집, 당근에서</h1>
            <h1>편하게 직거래해보세요.</h1>
          </div>
          <button className="bg-[#fa6616] text-white text-[0.875rem] leading-[1.4] w-fit p-2 rounded-md">
            매물 올리기
          </button>
        </div>
        <div className="w-[500px] h-[170px]">
          <img src="./images/realty_hero.png" alt="jobs_image" />
        </div>
      </div>
      <div className="text-[2rem] leading-[1.5] py-[1rem] font-bold flex justify-center mt-11">
        인기 부동산 직거래 게시글
      </div>
      <div className="flex justify-center">
        <ul className="w-[1000px] h-[1000px] grid grid-cols-2 mt-20 hover:cursor-pointer">
          {realtyData.map((v, i) => (
            <RealtyCard
              key={i}
              image={v.image}
              title={v.title}
              desc={v.desc}
              price={v.price}
            />
          ))}
        </ul>
      </div>
      <div className="flex justify-center my-12">
        <div className="bg-[#009ceb1a] w-[768px] h-[140px] flex justify-between items-center px-6 mb-12 rounded-md">
          <div className="flex items-center">
            <img
              className="w-[96px]"
              src="./images/realty_ban.png"
              alt="jobs_ban"
            />
            <div className="ml-8 text-[#212124]">
              <h1 className="text-[1.25rem] leading-[1.3] font-bold">
                복비 없이 투명한 직거래
              </h1>
              <h1 className="text-[1.25rem] leading-[1.3] font-bold">
                당근 내 근처 탭에서 바로 찾아보세요!
              </h1>
            </div>
          </div>
          <div className="bg-[#FF6F0F] px-[8px] py-[10px] justify-items-center rounded-lg text-white text-[1.125rem] leading-[1.32] font-bold hover:cursor-pointer">
            앱 다운로드 하기
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-12 border-b-2">
        <ul className="w-[1000px] h-[1000px] grid grid-cols-2 hover:cursor-pointer">
          {realtyDataT.map((v, i) => (
            <RealtyCard
              key={i}
              image={v.image}
              title={v.title}
              desc={v.desc}
              price={v.price}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default RealtyPage;
