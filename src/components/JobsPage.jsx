import JobCard from "../components/JobCard";

const jobData = [
  {
    image: "job1",
    title: "고양이 돌보미 (여)",
    desc: "경상남도 진주시 상평동",
    price: "시급 13,230",
  },
  {
    image: "job2",
    title: "대왕암 멘트 및 안내 구인!",
    desc: "울산광역시 동구 일산동",
    price: "일급 60,000",
  },
  {
    image: "job3",
    title: "공사현장 신호수 모집",
    desc: "인천광역시 부평구 부평동",
    price: "시급 20,000",
  },
  {
    image: "job4",
    title: "토마토 농장에서 일하실분 구함",
    desc: "경상남도 김해시 화목동",
    price: "일급 85,000",
  },
  {
    image: "job5",
    title: "10:30 ~ 12:30 간단한 정리",
    desc: "경상북도 구미시 형곡동",
    price: "시급 10,000",
  },
  {
    image: "job6",
    title: "스터디 카페/ 학원 청소",
    desc: "부산광역시 사하구 감천동",
    price: "월급 920,000",
  },
  {
    image: "job7",
    title: "아이 둘 돌봐주실 이모님 구합니다.",
    desc: "부산광역시 동래구 안락동",
    price: "월급 1,600,000",
  },
  {
    image: "job8",
    title: "사진 잘 찍고 인스타 잘하시는 분",
    desc: "전라남도 순천시 연향동",
    price: "시급 20,000",
  },
  {
    image: "job9",
    title: "탕정 야시장 알바구인",
    desc: "충청남도 아산시 탕정면",
    price: "시급 20,000",
  },
  {
    image: "job10",
    title: "신경주역 아파트 현장내부 전기일",
    desc: "경상북도 경주시 건천읍",
    price: "월급 4,000,000",
  },
];

const jobDataT = [
  {
    image: "job11",
    title: "이마트24센터 중분류 1명 모집",
    desc: "강원특별자치도 원주시 호저면",
    price: "월급 2,600,000",
  },
  {
    image: "job12",
    title: "재미있는 유튜브 방청알바",
    desc: "경기도 성남시 분당구 서현동",
    price: "시급 13,000",
  },
  {
    image: "job13",
    title: "토요일 오전 9시 ~ 6시 주말 하루 알바",
    desc: "충청북도 충주시 연수동",
    price: "시급 9,620",
  },
  {
    image: "job14",
    title: "대단한탕후루 상시 알바모집",
    desc: "경상남도 김해시 내동",
    price: "시급 10,000",
  },
  {
    image: "job15",
    title: "속눈썹펌 모델 아르바이트 구함",
    desc: "부산광역시 부산진구 부전동",
    price: "일급 10,000",
  },
  {
    image: "job16",
    title: "석사동 엔타 위치 아이스크림 알바",
    desc: "강원특별자치도 춘천시 석사동",
    price: "시급 10,000",
  },
  {
    image: "job17",
    title: "고양 스타필드 무인양품 트윈팝스낵 부스 관리",
    desc: "경기도 고양시 덕양구 동산동",
    price: "시급 12,000",
  },
  {
    image: "job18",
    title: "광주 보이저 첨단 플리마켓 알바 모집",
    desc: "광주광역시 광산구 쌍암동",
    price: "시급 10,000",
  },
  {
    image: "job19",
    title: "속눈썹펌 모델 구합니다 ^^",
    desc: "충청남도 천안시 서북구 두정동",
    price: "건당 10,000",
  },
  {
    image: "job20",
    title: "속눈썹 연장 모델 구합니다.",
    desc: "서울특별시 관악구 봉천동",
    price: "시급 9,620",
  },
];

const JobsPage = () => {
  return (
    <>
      <div className="bg-[#ffe2d2] h-[25rem] flex justify-center items-center">
        <div className="w-[400px] h-[259px] flex flex-col mt-[40px]">
          <div className="text-[2.5rem] text-[#212124] font-bold leading-[1.5]">
            <h1>우리 동네에서 찾는</h1>
            <h1>당근알바</h1>
          </div>
          <div className="text-[1.325rem] text-[#212124] leading-[1.32] my-8">
            <h1>걸어서 10분 거리의</h1>
            <h1>동네 알바들 여기 다 있어요.</h1>
          </div>
          <button className="bg-[#fa6616] text-white text-[0.875rem] leading-[1.4] w-fit p-2 rounded-md">
            공고 올리기
          </button>
        </div>
        <div className="w-[600px] h-[115px]">
          <img src="./images/jobs_image.png" alt="jobs_image" />
        </div>
      </div>
      <div className="text-[2rem] leading-[1.5] py-[1rem] font-bold flex justify-center mt-11">
        인기 당근 알바
      </div>
      <div className="flex justify-center">
        <ul className="w-[1000px] h-[1000px] grid grid-cols-2 mt-20 hover:cursor-pointer">
          {jobData.map((v, i) => (
            <JobCard
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
              src="./images/jobs_ban.png"
              alt="jobs_ban"
            />
            <div className="ml-8 text-[#212124]">
              <h1 className="text-[1.25rem] leading-[1.3] font-bold">
                당근알바 이용방법이 궁금하다면
              </h1>
              <h1 className="text-[1.25rem] leading-[1.3] font-bold">
                지금 바로 알아보세요!
              </h1>
            </div>
          </div>
          <div className="bg-[#FF6F0F] px-[8px] py-[10px] justify-items-center rounded-lg text-white text-[1.125rem] leading-[1.32] font-bold hover:cursor-pointer">
            이용방법 알아보기
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="w-[1000px] h-[1000px] grid grid-cols-2 hover:cursor-pointer">
          {jobDataT.map((v, i) => (
            <JobCard
              key={i}
              image={v.image}
              title={v.title}
              desc={v.desc}
              price={v.price}
            />
          ))}
        </ul>
      </div>
      <div className="flex justify-center my-12 pb-24 border-b-2">
        <div className="bg-[#ff6f0f24] w-[768px] h-[140px] flex justify-between items-center px-6 mb-12 rounded-md">
          <div className="flex items-center">
            <img
              className="w-[96px]"
              src="./images/jobs_bann.png"
              alt="jobs_ban"
            />
            <div className="ml-8 text-[#212124]">
              <h1 className="text-[1.25rem] leading-[1.3] font-bold">
                우리동네 알바가 궁금하다면
              </h1>
              <h1 className="text-[1.25rem] leading-[1.3] font-bold">
                당근에서 바로 찾아보세요!
              </h1>
            </div>
          </div>
          <div className="bg-[#FF6F0F] px-[8px] py-[10px] justify-items-center rounded-lg text-white text-[1.125rem] leading-[1.32] font-bold hover:cursor-pointer">
            앱 다운로드 하기
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsPage;
