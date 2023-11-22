import BannerCard from "../components/BannerCard";

const bannerData = [
  {
    image: "one",
    title: "삼성텔레비전60인치",
    price: "150,000원",
    desc: "서울 서초구 반포2동",
  },
  {
    image: "two",
    title: "미니 건조기",
    price: "10,000원",
    desc: "인천 부평구 부평동",
  },
  {
    image: "three",
    title: "쌀20kg",
    price: "45,000원",
    desc: "대구 달서구 유천동",
  },
  {
    image: "four",
    title: "아이폰12 화이트 128G",
    price: "300,000원",
    desc: "서울 관악구 신림동",
  },
  {
    image: "five",
    title: "갤럭시 버즈2 Pro",
    price: "20,000원",
    desc: "서울 관악구 신림동",
  },
  {
    image: "six",
    title: "전기자전거",
    price: "250,000원",
    desc: "울산 남구 야음장생포동",
  },
  {
    image: "seven",
    title: "폴드4 256G",
    price: "400,000원",
    desc: "광주 서구 쌍촌동",
  },
  {
    image: "eight",
    title: "전자레인지",
    price: "25,000원",
    desc: "부산 북구 화명동",
  },
  {
    image: "nine",
    title: "네이처하이크 야전침대",
    price: "20,000원",
    desc: "서울 중랑구 면목제4동",
  },
];

const FleamarketPage = () => {
  return (
    <>
      <div className="bg-[#FFF1AA] h-[400px] flex justify-center items-center">
        <div className="w-[768px] h-[259px] flex justify-center items-center mt-14">
          <div>
            <div className="text-[34px] font-bold leading-[1.5]">
              <h1>믿을만한</h1>
              <h1>이웃 간 중고거래</h1>
            </div>
            <div className="text-[18px] leading-[1.32] mt-[16px]">
              <h1>동네 주민들과 가깝고 따뜻한 거래를</h1>
              <h1>지금 경험해보세요.</h1>
            </div>
          </div>
          <div className="w-[455px] h-[345px]">
            <img
              src="./images/fleamarket_banner.webp"
              alt="fleamarket_banner"
            />
          </div>
        </div>
      </div>
      <div className="text-[32px] leading-[32.2px] flex justify-center items-center mt-20">
        중고거래 인기매물
      </div>
      <div className="flex justify-center">
        <ul className="w-[757px] h-[1000px] grid grid-cols-3 justify-items-center mt-20 hover:cursor-pointer">
          {bannerData.map((v, i) => (
            <BannerCard
              key={i}
              image={v.image}
              title={v.title}
              price={v.price}
              desc={v.desc}
            />
          ))}
        </ul>
      </div>
      <div className="hover:cursor-pointer text-[16px] mb-12 underline text-[#212529] leading-[32.2px] font-bold flex justify-center items-center mt-[60px]">
        인기매물 더보기
      </div>
      <div className="bg-[#F8F9FA] mb-12 flex justify-center items-center text-[#212529] text-[20px] h-16 border-b-2">
        <span className="underline font-semibold hover:cursor-pointer">
          중고거래 인기검색어
        </span>
        <ul className="flex mx-8">
          <li className="hover:cursor-pointer">알바</li>
          <li className="mx-8 hover:cursor-pointer">순금</li>
          <li className="hover:cursor-pointer">나눔</li>
          <li className="mx-8 hover:cursor-pointer">자전거</li>
          <li className="hover:cursor-pointer">24k</li>
          <li className="mx-8 hover:cursor-pointer">당근알바</li>
          <li className="hover:cursor-pointer">아이폰</li>
          <li className="mx-8 hover:cursor-pointer">냉장고</li>
          <li className="mr-8 hover:cursor-pointer">의자</li>
          <li className="hover:cursor-pointer">중고차</li>
        </ul>
      </div>
      <footer className="flex flex-col items-center">
        <div className="flex">
          <div className="flex text-[1rem] mt-8 mr-[100px]">
            <ul className="text-[#212124] flex">
              <li>
                <h1 className="banbok">중고거래</h1>
                <h1 className="banbok my-5">동네업체</h1>
                <h1 className="banbok">당근알바</h1>
                <h1 className="banbok my-5">부동산 직거래</h1>
                <h1 className="banbok">중고차 직거래</h1>
              </li>
              <li className="mx-8">
                <h1 className="banbok">당근 비즈니스</h1>
                <h1 className="banbok my-5">채팅하기</h1>
              </li>
              <li>
                <h1 className="banbok">자주 묻는 질문</h1>
                <h1 className="banbok my-5">회사 소개</h1>
                <h1 className="banbok">인재 채용</h1>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <div className="text-[1rem] leading-[1.4] font-bold">
              당근 앱 다운로드
            </div>
            <div className="flex">
              <div className="bg-gray-200 mr-4 mt-4 w-[144px] h-[44px] rounded-md hover:cursor-pointer hover:bg-gray-300">
                <img
                  className="w-[90px] m-auto"
                  src="./images/apple_appstore.png"
                  alt="apple_appstore"
                />
              </div>
              <div className="bg-gray-200 mr-4 mt-4 w-[144px] h-[44px] rounded-md hover:cursor-pointer hover:bg-gray-300">
                <img
                  className="w-[120px] m-auto pt-2"
                  src="./images/Google_Play.svg"
                  alt="Google_Play"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-12 border-t-2 pt-11">
          <div className="mr-[200px]">
            <div className=" text-[0.9rem] text-[#868b94]">
              <div className="flex items-center">
                <div>
                  <span className="mr-2 font-semibold">대표</span>
                  <span>김OO, 황OO</span>
                </div>
                <div>
                  <span className="ml-4 mr-2 border-l-2 pl-3 font-semibold">
                    사업자번호
                  </span>
                  <span>123-45-67890</span>
                </div>
              </div>
              <div>
                <span className="mr-2 font-semibold">
                  직업정보제공사업 신고번호
                </span>
                <span>A1234567890</span>
              </div>
              <div>
                <span className="mr-2 font-semibold">주소</span>
                <span>서울특별시 OO구 OOO로 OO길 OO, 101호 (당근서비스)</span>
              </div>
              <div className="flex items-center">
                <div>
                  <span className="mr-2 font-semibold">전화</span>
                  <span>1544-1544</span>
                </div>
                <div>
                  <span className="ml-4 mr-2 border-l-2 pl-3 font-semibold">
                    고객문의
                  </span>
                  <span>cs@daangenserviec.com</span>
                </div>
              </div>
              <div className="mt-4 font-semibold">
                <span className="banbok">제휴 문의</span>
                <span className="mx-4 banbok">광고 문의</span>
                <span className="mr-4 banbok">PR 문의</span>
                <span className="banbok">IR 문의</span>
              </div>
            </div>
          </div>
          <div className="flex items-start">
            <img className="w-[200px]" src="./images/logo.jpg" alt="logo" />
          </div>
        </div>
        <div className="w-[803.73px]">
          <div className="mt-4 mb-[80px] font-semibold text-[0.9rem] text-[#868b94]">
            <span className="banbok">이용약관</span>
            <span className="mx-4 banbok">개인정보처리방침</span>
            <span className="mr-4 banbok">위치기반서비스 이용약관</span>
            <span className="mr-4 banbok">이용자보호 비전과 계획</span>
            <span className="banbok">청소년보호정책</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FleamarketPage;
