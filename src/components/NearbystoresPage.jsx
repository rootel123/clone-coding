import NearCard from "../components/NearCard.jsx";

const nearData = [
  {
    image: "nearone",
    title: "오떡순",
    desc: "안녕하세요 신원시장 오떡순입니다 ^^",
  },
  {
    image: "neartwo",
    title: "훈민용달",
    desc: "당근마켓 후기 1등 단골1동 훈민용달",
  },
  {
    image: "nearthree",
    title: "드롭플라워",
    desc: "신선한 생화를 저렴한 가격에 픽업하실 수 있어요",
  },
  {
    image: "nearfour",
    title: "윤씨네 즉석두부",
    desc: "관악신사시장에서 제일 젊은 사장이 운영중인 곳!",
  },
  {
    image: "nearfive",
    title: "영클린 홈케이",
    desc: "에어컨청소 깨끗하게 해드려요",
  },
  {
    image: "nearsix",
    title: "씨유네일",
    desc: "_see_u_nail 인스타 ❤ 3인동시 시술 가능",
  },
  {
    image: "nearseven",
    title: "도로플라워",
    desc: "도로행복 꽃 배송!",
  },
  {
    image: "neareight",
    title: "노랑이사/용달",
    desc: "원룸이사! 가전/가구 용달! 언제든 연락주세요~",
  },
];

const NearbystoresPage = () => {
  return (
    <>
      <div className="bg-[#f7f1eb] h-[25rem] flex justify-center items-center">
        <div className="w-[400px] h-[259px] flex flex-col mt-36">
          <div className="text-[2rem] text-[#212124] font-bold leading-[1.5]">
            <h1>동네 이웃들이</h1>
            <h1>자주 가는 동네 업체</h1>
          </div>
          <div className="text-[1.125rem] text-[#212124] leading-[1.32] mt-4">
            <h1>우리 동네 사람들이</h1>
            <h1>이용하는 업체를 찾아보세요.</h1>
          </div>
        </div>
        <div className="w-[500px] h-[175px]">
          <img src="./images/nearby_stores_image.png" alt="nearby_store" />
        </div>
      </div>
      <div className="text-[2rem] leading-[1.5] py-[1rem] font-bold flex justify-center mt-11">
        다양한 동네업체를 볼 수 있어요
      </div>
      <div className="flex justify-center">
        <ul className="w-[800px] h-[1000px] grid grid-cols-2 mt-20 hover:cursor-pointer">
          {nearData.map((v, i) => (
            <NearCard key={i} image={v.image} title={v.title} desc={v.desc} />
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <div className="bg-[#f7f1eb] w-[768px] h-[120px] flex justify-between items-center px-6 mb-12">
          <div className="flex items-center">
            <img src="./images/coa.svg" alt="coa" />
            <div className="ml-8 text-[#212124]">
              <h1 className="text-[1.25rem] leading-[1.3] font-bold">
                업체를 운영하고 계신가요?
              </h1>
              <h1>당근에 등록하고 이웃에게 알려보세요!</h1>
            </div>
          </div>
          <div className="bg-[#FF6F0F] px-[8px] py-[10px] justify-items-center rounded-lg text-white text-[1.125rem] leading-[1.32] font-bold hover:cursor-pointer">
            비즈프로필 만들기
          </div>
        </div>
      </div>
      <footer className="flex flex-col items-center border-t-2">
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

export default NearbystoresPage;
