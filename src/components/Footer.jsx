const Footer = () => {
  return (
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
  );
};

export default Footer;
