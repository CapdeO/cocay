import "./App.css";
import BuyTable from "./components/BuyTable";
import Footer from "./components/Footer";
import Nosotros from "./components/Nosotros";
import Navbar from "./components/navbar/Navbar";
import video from "../public/token.gif";

function App() {
  return (
    <>
      <div className="bg-primary">
        <Navbar />

        <div className="flex justify-center pt-[100px]">
          <img src={video} alt="Token Gif" />
        </div>
        <BuyTable />
        <Nosotros />
        <Footer />
      </div>
    </>
  );
}

export default App;
