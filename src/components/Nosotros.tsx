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
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b-black">
            <AccordionTrigger>¿Quien es la constructora?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b-black">
            <AccordionTrigger>Razón de negocio</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-b-black">
            <AccordionTrigger>Tiempos</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="border-b-black">
            <AccordionTrigger>Como</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Nosotros;
