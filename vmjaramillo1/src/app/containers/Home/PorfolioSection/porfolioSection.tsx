import GlobalContainer from "@global/GlobalContainer";
import GlobalItemPorfolio from "@global/GlobalItemPorfolio";
import Masonry from "@mui/lab/Masonry";
import uno from "app/assets/gallery/1.jpg";
import dos from "app/assets/gallery/2.jpg";
import tres from "app/assets/gallery/3.jpg";
import cuadro from "app/assets/gallery/4.jpg";
import cinco from "app/assets/gallery/5.jpg";

const itemData = [
  {
    img: uno,
    title: "Fern",
  },
  {
    img: dos,
    title: "Snacks",
  },
  {
    img: tres,
    title: "Mushrooms",
  },
  {
    img: cuadro,
    title: "Tower",
  },
  {
    img: cinco,
    title: "Sea star",
  },
];

const porfolio = () => {
  return (
    <section id="porfolio-section" className="bg-neutral-alternative1-900 pb-0">
      <GlobalContainer contentSize="xxl">
        <div className="min-h-screen items-center">
          <div className="grid grid-cols-12 ">
            {/* TITLE SECCTION */}
            <div className="col-span-full text-center">
              <h2
                className="mb-16 text-white"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                Porfolio
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
              <div className="mx-auto mb-2xl w-9/12 text-center">
                <Masonry columns={3} spacing={2}>
                  {itemData.map((item, index) => (
                    <div key={index}>
                      <GlobalItemPorfolio
                        title="test"
                        body="body"
                        img={{ src: item.img, alt: "test" }}
                      />
                    </div>
                  ))}
                </Masonry>
              </div>
            </div>
          </div>
        </div>
      </GlobalContainer>
    </section>
  );
};

export default porfolio;
