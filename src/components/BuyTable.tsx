import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const BuyTable = () => {
  //USDT es la moneda por defecto
  const [selected, setSelected] = useState("USDT");
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
          placeholder="Código de descuento"
          className="border-2 border-secondary bg-secondary bg-opacity-70 text-white placeholder:text-white placeholder:text-opacity-60 px-4 py-2 rounded-[32px] w-full max-w-[400px]"
        />
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3">
          <p className="">Adquirir</p>
          <input
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
        <button type="submit" className="button-with-border">
          Comprar Ahora
        </button>
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
