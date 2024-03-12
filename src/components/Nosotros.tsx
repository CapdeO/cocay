import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Nosotros = () => {
  return (
    <section className="w-full sectionPaddings pt-[50px] sm:pt-[100px] flex flex-col items-center">
      <div className="w-full max-w-maxSectionWidth">
        <h2 className="text-3xl text-secondary font-bold">Nosotros</h2>
        <Accordion type="single" collapsible className="">
          <AccordionItem value="item-1" className="border-b-black">
            <AccordionTrigger>¿Quienes Somos?</AccordionTrigger>
            <AccordionContent>
              (AI solves) Primer desarrollo web3 con venta en restaurant
              totalmente descentralizado en Playa del Carmen, Mexico.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b-black">
            <AccordionTrigger>¿Quien es la constructora?</AccordionTrigger>
            <AccordionContent>
              Con 22 años de experiencia, construyendo los inmuebles mas
              rápidos, de calidad y con tiempos insuperables. Lo mejor en
              costo/beneficio.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-black">
            <AccordionTrigger>Razón de negocio</AccordionTrigger>
            <AccordionContent>
              Colocar tokens para compra de tierras en Tulum, urbanizar,
              fraccionar y vender para obtener el doble del recurso.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b-black">
            <AccordionTrigger>Tiempos</AccordionTrigger>
            <AccordionContent>48 meses</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-b-black">
            <AccordionTrigger>Como</AccordionTrigger>
            <AccordionContent>
              Adquieres desde 1 token hasta 200,000 tokens. Y recibe el doble de
              tokens terminado el proyecto.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Nosotros;
