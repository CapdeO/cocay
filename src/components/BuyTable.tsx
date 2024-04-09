import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Web3Button } from "@thirdweb-dev/react";
import { useRef, useState } from "react";
import abi from '../abis/icoAbi.json'




const BuyTable = () => {
  //USDT es la moneda por defecto
  const [selected, setSelected] = useState("USDT");

  const sponsorCode = useRef()
  const valueToBuy = useRef()


  return (
    <section className="w-full sectionPaddings pt-[30px] flex flex-col items-center gap-24">
      <form className="border-2 border-secondary rounded-[32px] w-full max-w-maxSectionWidth flex flex-col gap-[40px] items-center px-[10px] py-[20px]">
        <h1 className="text-3xl text-secondary font-semibold text-center">
          Quedan X tokens de Cocay de 200.000
        </h1>
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-secondary rounded-[32px] px-4 py-2 text-primary w-full max-w-[400px]">
            Criptomoneda: {selected} <span className="ml-2">▼</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[200px]">
            {criptomonedas.map((criptomoneda) => (
              <DropdownMenuItem
                onClick={() => setSelected(criptomoneda.nombre)}
              >
                {criptomoneda.nombre}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <input
        ref={sponsorCode}
          placeholder="Código de descuento"
          className="border-2 border-secondary bg-secondary bg-opacity-70 text-white placeholder:text-white placeholder:text-opacity-60 px-4 py-2 rounded-[32px] w-full max-w-[400px]"
        />
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3">
          <p className="">Adquirir</p>
          <input
          ref={valueToBuy}
            type="number"
            placeholder="XXX"
            className="border-2 border-secondary bg-secondary bg-opacity-70 text-white placeholder:text-white placeholder:text-opacity-60 px-4 py-2 rounded-[32px] w-full max-w-[200px]"
          />
          <p>Tokens</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">Calculardora:</p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="number"
              placeholder="USD"
              className="border-2 border-secondary bg-secondary bg-opacity-70 text-white placeholder:text-white placeholder:text-opacity-60 px-4 py-2 rounded-[32px] w-full max-w-[200px]"
            />
            <p> = </p>
            <input
              type="number"
              placeholder="Tokens"
              className="border-2 border-secondary bg-secondary bg-opacity-70 text-white placeholder:text-white placeholder:text-opacity-60 px-4 py-2 rounded-[32px] w-full max-w-[200px]"
            />
          </div>
        </div>
       {/* <button type="submit" className="button-with-border">
          Comprar Ahora
            </button>*/}
                     <Web3Button
                     className="button-with-border"
          //  contractAddress="0x0cda7c31216405d997479f3e0219a5d9f3d9909c"
          contractAddress="0xe6e943948429bC4eE175512ed56695a3e60dC825"
          contractAbi={abi}
          action={async (contract) => {
              console.log(valueToBuy.current.value)
              console.log(sponsorCode.current.value)
            
                await contract.call("buyCocays", [valueToBuy.current.value,sponsorCode.current.value])

          }}
          onSuccess={(result) => alert("Success!")}
          onError={(error) => alert(`Error --> ${error.message}`)}
        >
        Comprar ahora
        </Web3Button>
      </form>
    </section>
  );
};

export default BuyTable;

const criptomonedas = [
  {
    nombre: "USDT",
  },
  {
    nombre: "BNB",
  },
  {
    nombre: "ETH",
  },
  {
    nombre: "TRON",
  },
];
