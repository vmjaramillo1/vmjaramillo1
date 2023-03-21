import GlobalAbilityItem from "@global/GlobalAbilityItem";
import GlobalContainer from "@global/GlobalContainer";
import EngineeringIcon from "@mui/icons-material/Engineering";
import HandymanIcon from "@mui/icons-material/Handyman";
import PsychologyIcon from "@mui/icons-material/Psychology";
import AOS from "aos";

AOS.init();

const WhatidoSection = () => {
  const abilityInfo = [
    {
      id: 1,
      icon: <PsychologyIcon className="h-xl w-xl pr-m text-primary-500" />,
      title: "Analisis",
      description:
        "Servicios de análisis de procesos para ayudar a las empresas a mejorar la eficiencia y la efectividad de sus operaciones, evaluando y analizando procesos existentes para identificar áreas de mejora y optimización mediante el uso de nuevas tecnologias.",
    },
    {
      id: 2,
      icon: <HandymanIcon className="h-xl w-xl pr-m text-primary-500" />,
      title: "Desarrollo",
      description:
        "Desarrollo de software personalizado para satisfacer las necesidades específicas de cualquier cliente, siempre manteniendo el enfoque en brindar soluciones eficientes y de alta calidad.",
    },
    {
      id: 3,
      icon: <EngineeringIcon className="h-xl w-xl pr-m text-primary-500" />,
      title: "Asesoria",
      description:
        "Asesoria en transformación digital empresarial para aprovechar al máximo las nuevas oportunidades tecnologícas, generando importantes ventajas competitivas y adelantarse a cambios dentro del mercado gracias al análisis de datos.",
    },
  ];

  return (
    <section
      id="what-it-section"
      className="h-auto w-full bg-neutral-alternative1-900 bg-cover bg-center py-0"
    >
      <GlobalContainer contentSize="xxl">
        <div className="flex min-h-[90vh] items-center pt-4xl md:pt-0">
          <div className="grid grid-cols-12 ">
            {/* TITLE SECCTION */}
            <div className="col-span-full mb-l text-center">
              <h2
                className="mb-16 text-white"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                Mis Servicios
              </h2>
              <div
                className="relative mx-auto mb-40 h-[1px] w-32 bg-primary-500 before:absolute before:left-[-40px] before:h-[1px] before:w-32 before:bg-neutral-alternative1-400 after:absolute after:right-[-40px] after:h-[1px] after:w-32 after:bg-neutral-alternative1-400"
                data-aos="fade-up"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-once="true"
              />
            </div>
            <div className="col-span-full text-center md:flex md:px-10xl">
              {abilityInfo.map((item, index) => {
                return <GlobalAbilityItem key={index} {...item} />;
              })}
            </div>
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
};

export default WhatidoSection;
