import logo from "@/assets/cocayTulumLogo.png";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center mt-[80px] border-t-[1px] border-black border-opacity-60 pt-[2rem]">
      <div className="w-full max-w-maxSectionWidth sectionPaddings flex flex-col items-center">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-around w-full">
          <div className="flex flex-col justify-between items-center gap-8">
            <img src={logo} alt="Cocay Logo" className="w-[80px]" />
          </div>
          <button className="button-with-border">
            Únete a nuestra fuerza de ventas
          </button>
          <ul className="text-xl font-medium">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Soporte Téctico</a>
            </li>
          </ul>
        </div>
        <div className="h-[1px] bg-[rgb(0,0,0)] bg-opacity-60 w-[95%] mt-4" />
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-[48px] w-full">
          <p>Copyright Cocay Token 2024. Nicosia, Chipre </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
