import Footer from "../components/Footer.jsx";
import Mainbanner from "../components/Mainbanner.jsx";
import Subannerthree from "../components/Subannerthree.jsx";
import Subbannerfour from "../components/Subbannerfour.jsx";
import Subbannerone from "../components/Subbannerone.jsx";
import Subbannertwo from "../components/Subbannertwo.jsx";
import Topmenu from "../components/Topmenu.jsx";

const Main = () => {
  return (
    <>
      <Topmenu />
      <Mainbanner />
      <Subbannerone />
      <Subbannertwo />
      <Subannerthree />
      <Subbannerfour />
      <Footer />
    </>
  );
};

export default Main;
