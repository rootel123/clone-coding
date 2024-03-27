import CarCard from "../components/CarCard.jsx";

const carData = [
  {
    image: "car1",
    title: "람보르기니 아벤타도르 LP700-4 Roadster",
    desc: "15년식 ㆍ 1.3만km ㆍ 성수동1가",
    price: "3억 1,000만원",
  },
  {
    image: "car2",
    title: "기아 올 뉴 카니발 YP 9인승(디젤 2.2) FWD 럭셔리",
    desc: "15년식 ㆍ 14.8만km ㆍ 정왕4동",
    price: "1,190만원",
  },
  {
    image: "car3",
    title: "BMW X5 E70 30d xDrive (235마력)",
    desc: "09년식 ㆍ 17.6만km ㆍ 죽전동",
    price: "850만원",
  },
  {
    image: "car4",
    title: "벤츠 B 클래스 W245 B200 (116마력)",
    desc: "10년식 ㆍ 13.2만km ㆍ 행당동",
    price: "550만원",
  },
  {
    image: "car5",
    title: "쉐보레 카마로 5세대 3.6 쿠페",
    desc: "12년식 ㆍ 17.6만km ㆍ 양벌동",
    price: "830만원",
  },
  {
    image: "car6",
    title: "BMW 5시리즈 F10 520d (184마력)",
    desc: "13년식 ㆍ 14.8만km ㆍ 정자1동",
    price: "980만원",
  },
  {
    image: "car7",
    title: "벤츠 S 클래스 W222 S500 4Matic L",
    desc: "15년식 ㆍ 12.5만km ㆍ 역삼동",
    price: "3,700만원",
  },
  {
    image: "car8",
    title: "기아 뉴 모닝 SA 5도어 1.0 SLX 고급형 블랙프리미엄",
    desc: "10년식 ㆍ 17.8만km ㆍ 안심3,4동",
    price: "165만원",
  },
  {
    image: "car9",
    title: "기아 레이 TAM 1.0 (MPi) 밴 FWD 고급형",
    desc: "16년식 ㆍ 21.5만km ㆍ 방화동",
    price: "430만원",
  },
  {
    image: "car10",
    title: "기아 레이 TAM 1.0 (MPi) FWD 디럭스",
    desc: "17년식 ㆍ 10만km ㆍ 남부동",
    price: "700만원",
  },
];

const carDataT = [
  {
    image: "car11",
    title: "기아 올 뉴 모닝 JA 1.0 MPi 럭셔리",
    desc: "18년식 ㆍ 8만km ㆍ 호평동",
    price: "640만원",
  },
  {
    image: "car12",
    title: "볼보 XC60 I D3",
    desc: "13년식 ㆍ 13.5만km ㆍ 진영읍",
    price: "820만원",
  },
  {
    image: "car13",
    title: "포드 토러스 VI 2.0 ECO 리미티드",
    desc: "14년식 ㆍ 10만km ㆍ 송도1동",
    price: "630만원",
  },
  {
    image: "car14",
    title: "포드 익스플로러 V 2.0 FWD",
    desc: "12년식 ㆍ 15만km ㆍ 동산동",
    price: "1,170만원",
  },
  {
    image: "car15",
    title: "르노코리아 올 뉴 SM7 L47 2.5 V6 RE",
    desc: "12년식 ㆍ 16.8만km ㆍ 물금읍",
    price: "490만원",
  },
  {
    image: "car16",
    title: "쉐보레(대우) 말리부 V300 2.0 DOHC LTZ 디럭스팩/블랙휠",
    desc: "13년식 ㆍ 14.6만km ㆍ 진접읍",
    price: "450만원",
  },
  {
    image: "car17",
    title: "현대 YF 쏘나타 YF Y20 탑 기본",
    desc: "11년식 ㆍ 11.2만km ㆍ 아라동",
    price: "380만원",
  },
  {
    image: "car18",
    title: "현대 제네시스 DH G330 4WD 모던",
    desc: "16년식 ㆍ 5.2만km ㆍ 화곡제8동",
    price: "1,850만원",
  },
  {
    image: "car19",
    title: "기아 올 뉴 카리발 YP 9인승 (디젤 하이리무진) FWD",
    desc: "15년식 ㆍ 12.3만km ㆍ 산곡동",
    price: "1,980만원",
  },
  {
    image: "car20",
    title: "푸조 2008 I 1.6 BLUE-HDI 펠린",
    desc: "16년식 ㆍ 8.8만km ㆍ 동부동",
    price: "750만원",
  },
];

const CarPage = () => {
  return (
    <>
      <div className="bg-[#d2edfa] h-[30rem] flex justify-center items-center">
        <div className="w-[400px] h-[259px] flex flex-col mt-[60px] ml-[40px]">
          <div className="text-[2.5rem] text-[#212124] font-bold leading-[1.5]">
            <h1>딜러 수수료 없는</h1>
            <h1>중고차 직거래</h1>
          </div>
          <div className="text-[1.325rem] text-[#212124] leading-[1.32] my-8">
            <h1>딜러 없이 믿고 살 수 있는 중고차,</h1>
            <h1>당근에서 직거래해보세요.</h1>
          </div>
          <button className="bg-[#fa6616] text-white text-[0.875rem] leading-[1.4] w-fit p-2 rounded-md">
            내 차 판매하기
          </button>
        </div>
        <div className="w-[500px] h-[250px]">
          <img src="./images/car_hero.png" alt="jobs_image" />
        </div>
      </div>
      <div className="text-[2rem] leading-[1.5] py-[1rem] font-bold flex justify-center mt-11">
        인기 중고차
      </div>
      <div className="flex justify-center">
        <ul className="w-[1000px] h-[1000px] grid grid-cols-2 mt-20 hover:cursor-pointer">
          {carData.map((v, i) => (
            <CarCard
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
              src="./images/car_ban.png"
              alt="car_ban"
            />
            <div className="ml-8 text-[#212124]">
              <h1 className="text-[1.25rem] leading-[1.3] font-bold">
                딜러 수수료 없는 중고차 직거래
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
          {carDataT.map((v, i) => (
            <CarCard
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

export default CarPage;
