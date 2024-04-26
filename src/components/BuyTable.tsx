import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThirdwebSDK,  useSigner } from "@thirdweb-dev/react";
import { useEffect, useRef, useState } from "react";
import abi from '../abis/icoAbi.json'
import abiUsdt from '../abis/abiUsdt.json'
import { PolygonAmoyTestnet } from "@thirdweb-dev/chains";
import { ethers } from "ethers";


const BuyTable = () => {
  //USDT es la moneda por defecto
  const [selected, setSelected] = useState("USDT");
  //const [changeCalculator, setChangeCalculator] = useState(0)
  const [aprobar, setAprobar] = useState(false)

  const sponsorCode = useRef<HTMLInputElement>(null);
  const valueToBuy = useRef<HTMLInputElement>(null);
  //const cantUsdt = useRef<HTMLInputElement>(null);
  const signer = useSigner() 


  const aprobarTokens = async() =>{

    if (!valueToBuy.current?.value) {
      console.error("valueToBuy is undefined");
      return;
    }

    const valueToBuyValue = valueToBuy.current.value;
    const valueToBuyInTokens = ethers.utils.parseEther(valueToBuyValue);

    console.log(signer)
    if (!signer) {
      console.error("Signer is undefined");
      return;
    }
    const sdk = ThirdwebSDK.fromSigner(signer, PolygonAmoyTestnet);
    const contractMain = await sdk.getContract(
      "0x55d398326f99059fF775485246999027B3197955", 
      abiUsdt,
    );
     await contractMain.call(
      "approve", 
      ["0xe6B4Ce06Df35ddE658087A0a31E92c61cdA1306a", valueToBuyInTokens ]
    );
    setAprobar(true)
  }



  const buyTokens = async() =>{
    console.log(signer)
    if (!signer) {
      console.error("Signer is undefined");
      return;
    }

    if (!valueToBuy.current?.value) {
      console.error("valueToBuy is undefined");
      return;
    }


    if (!sponsorCode.current?.value) {
      console.error("valueToBuy is undefined");
      return;
    }

    const sdk = ThirdwebSDK.fromSigner(signer, PolygonAmoyTestnet);
    const contractMain = await sdk.getContract(
      "0xe6B4Ce06Df35ddE658087A0a31E92c61cdA1306a", 
      abi,
    );
     // console.log(ethers.utils.parseEther(valueToBuy.current.value.toString()))
     
     console.log(ethers.utils.parseEther(valueToBuy.current?.value.toString()))
     console.log(ethers.utils.parseUnits(valueToBuy.current?.value,"ether"))
     console.log(sponsorCode.current.value)
     
     await contractMain.call(
      "buyCocays", 
      [ethers.utils.parseEther(valueToBuy.current?.value.toString()),"'"+sponsorCode.current?.value+"'"]
    );
  }

{/*const handleCantUsdtChange = () => {
  const inputValue = cantUsdt.current?.value;

  if (inputValue === undefined || inputValue.trim() === "") {
      console.error("Input value is undefined or empty");
      return;
  }
  const numericValue = parseFloat(inputValue);

  if (!isNaN(numericValue)) {
      setChangeCalculator(numericValue);
  } else {
      console.error("Input value is not a valid number");
  }
};*/}

const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  return (
    <section className="w-full sectionPaddings pt-[30px] flex flex-col items-center gap-24">
      <form className="border-2 border-secondary rounded-[32px] w-full max-w-maxSectionWidth flex flex-col gap-[40px] items-center px-[10px] py-[20px]">
        <h1 className="text-3xl text-secondary font-semibold text-center">
        {isMobile ? (
                        <div className="with-break">
                           <a href="https://bscscan.com/address/0x534cae6D2510ED7688B220fE9a9fC1B9ba9DA9b8"> <span style={{padding:"5px", margin:"5px"}} className="button-with-border">Wallet Cocay</span></a>
                            <br />
                            <br />
                            <a href="https://bscscan.com/token/0x3157fF0829AC9F9be8a31129980e424638Bf390E"><span style={{padding:"5px", margin:"5px"}} className="button-with-border">Contrato Cocay Token</span></a>
                            <br />
                            <br />
                            <span style={{padding:"5px", margin:"5px"}} className="button-with-border"> token rewards</span>
                        </div>
                    ) : (
                        <div className="no-break">
        <a href="https://bscscan.com/address/0x534cae6D2510ED7688B220fE9a9fC1B9ba9DA9b8"> <span style={{padding:"5px", margin:"5px"}} className="button-with-border">Wallet Cocay</span></a>
                            <a href="https://bscscan.com/token/0x3157fF0829AC9F9be8a31129980e424638Bf390E"><span style={{padding:"5px", margin:"5px"}} className="button-with-border">Contrato Cocay Token</span></a>
                            <span style={{padding:"5px", margin:"5px"}} className="button-with-border">Contrato token rewards</span>
                        </div>
                    )}

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
        <p className="text-xl font-semibold">1 Token Cocay = 1 USDT</p>
     {/*   <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">Preview: 1 Token Cocay = 1 USDT</p>
          <div className="flex flex-col sm:flex-row items-center gap-2">
          <input
              ref={cantUsdt}
              type="number"
              placeholder="USD"
              onChange={handleCantUsdtChange}
              className="border-2 border-secondary bg-secondary bg-opacity-70 text-white placeholder:text-white placeholder:text-opacity-60 px-4 py-2 rounded-[32px] w-full max-w-[200px]"
          />
            <p> = </p>
            <input
            value={changeCalculator}
              type="number"
              placeholder="Tokens"
              className="border-2 border-secondary bg-secondary bg-opacity-70 text-white placeholder:text-white placeholder:text-opacity-60 px-4 py-2 rounded-[32px] w-full max-w-[200px]"
            />
          </div>
            </div>*/}
        {
          aprobar
              ?
              <div onClick={buyTokens} className="button-with-border">Comprar ahora</div>
              :
       <div onClick={aprobarTokens} className="button-with-border">Aprobar gastos</div>    
        
        }
          {/*  <Web3Button
      contractAddress="0xe6B4Ce06Df35ddE658087A0a31E92c61cdA1306a" // Your smart contract address
      contractAbi={abiUsdt}
      action={async (contract) => {
        await contract.call(
          "approve", 
          ["0xe6B4Ce06Df35ddE658087A0a31E92c61cdA1306a",10000000000000]
        );
      }}
    >
      Execute Action
    </Web3Button>*/}
     
      </form>
    </section>
  );
};
export default BuyTable;

const criptomonedas = [
  {
    nombre: "USDT",
  },
 /* {
    nombre: "BNB",
  },
  {
    nombre: "ETH",
  },
  {
    nombre: "TRON",
  },*/
];
