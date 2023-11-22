import { Link } from "react-router-dom";

const Tb = () => {
  return (
    <div className="bg-white w-full h-[80px] flex justify-center items-center fixed">
      <div className="w-[1200px] h-[64px] mx-[143.5px] px-[12px] py-[20px] flex items-center">
        <Link to="/" className="w-[65px] h-[36px] m-[36px]">
          <img src="./images/daangn.svg" alt="daangn" />
        </Link>
        <div className="pr-[40px] mr-[60px]">
          <ul className="flex font-bold text-[18px]">
            <Link
              to="/fleamarket"
              className=" mr-[30px] text-daangn-200 hover:cursor-pointer"
            >
              중고거래
            </Link>
            <Link
              to="/nearbystores"
              className=" mr-[30px] text-[#FF6F0F]  hover:cursor-pointer hover:text-gray-500"
            >
              동네업체
            </Link>
            <Link
              to="/jobs"
              className=" mr-[30px] text-daangn-200  hover:cursor-pointer hover:text-gray-500"
            >
              알바
            </Link>
            <Link
              to="/realty"
              className=" mr-[30px] text-daangn-200  hover:cursor-pointer hover:text-gray-500"
            >
              부동산 직거래
            </Link>
            <Link
              to="/car"
              className=" mr-[30px] text-daangn-200  hover:cursor-pointer hover:text-gray-500"
            >
              중고차 직거래
            </Link>
          </ul>
        </div>
        <div className="flex h-[36px] ">
          <input
            className="w-[250px] outline-none bg-gray-100 rounded-md p-3 "
            placeholder="물품이나 동네를 검색해보세요"
            type="text"
          ></input>
          <button
            className="ml-4 border border-gray-400 rounded-md px-3 hover:cursor-pointer hover:text-gray-500"
            type="submit"
          >
            채팅하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tb;
