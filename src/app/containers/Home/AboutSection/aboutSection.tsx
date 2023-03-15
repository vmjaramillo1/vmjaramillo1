import GlobalContainer from "@global/GlobalContainer";
import GlobalLenguajeProgress, {
  GlobalLenguajeProgressProps,
} from "@global/GlobalLenguajeProgress";
import GlobalTypography from "@global/GlobalTypography";
import AOS from "aos";

AOS.init();

const intiialValues: GlobalLenguajeProgressProps = {
  valueList: [
    { value: 90, text: "Python" },
    { value: 85, text: "SQL" },
    { value: 75, text: ".Net" },
    { value: 95, text: "Javascript" },
  ],
  individualSpiner: {
    thickness: 1.5,
    size: 200,
  },
  className: {
    individualSpiner: {
      root: "mx-auto",
      text: "body1 text-white",
      mainCircle: "text-primary-400",
      secondaryCircle: "text-neutral-500",
    },
  },
};

const aboutSection = () => {
  return (
    <section id="about-section" className="bg-neutral-alternative1-900 pb-0">
      <GlobalContainer contentSize="xl">
        <div className="flex min-h-screen items-center pt-4xl md:pt-0">
          <div className="grid grid-cols-12 ">
            {/* TITLE SECCTION */}
            <div className="col-span-full text-center" data-aos="fade-up">
              <h2
                className="mb-16 text-white"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                Quien Soy
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
            <div className="col-span-full">
              <div
                className="mx-auto mb-2xl w-10/12 text-center md:w-9/12"
                data-aos="fade-up"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                <GlobalTypography
                  variant="body1"
                  className="leading-[1.8rem] text-neutral-alternative1-300"
                >
                  Soy un Ing. en Sistemas de la ciudad de Loja, fuertemente
                  enfocado en el diseño y desarrollo de soluciones tecnológicas
                  disruptivas, que aprovechen al máximo las oportunidades
                  existentes y las nuevas tecnologías, en especial aquellas
                  relacionadas con el campo de IA y el análisis de datos. Me
                  apasionan los nuevos retos y siempre estoy en la búsqueda de
                  nuevas oportunidades.
                </GlobalTypography>
              </div>
            </div>
            <div className="col-span-full">
              <GlobalLenguajeProgress {...intiialValues} />
            </div>
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
};

export default aboutSection;
