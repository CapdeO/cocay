import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  return (
    <nav className="h-[100px] w-full flex justify-center fixed bg-primary bg-[url(../public/bg.png)] bg-cover bg-no-repeat z-50">
      <div className="w-full max-w-maxSectionWidth flex justify-between items-center sectionPaddings">
        <LanguageSelector />
        <button className="button-with-border hover:scale-105">
          Conectar Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
