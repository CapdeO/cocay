import "./App.css";
import BuyTable from "./components/BuyTable";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Navbar from "./components/navbar/Navbar";
import video from "../public/token.gif";
import CountDown from "./components/CountDown";
import Visitantes from "./components/Visitantes";

function App() {
  return (
    <>
      <div className="bg-[url(../public/bg.png)] bg-cover flex flex-col items-center gap-[20px]">
        <Navbar />

        <div className="flex justify-center pt-[100px]">
          <img src={video} alt="Token Gif" />
        </div>
        <CountDown />
        <BuyTable />
        <Nosotros />
        <Visitantes />
        <Footer />
      </div>
    </>
  );
}

export default App;
