import { useState } from "react";
import GlobalContainer from "@global/GlobalContainer";
import GlobalItemPorfolio from "@global/GlobalItemPorfolio";
import Masonry from "@mui/lab/Masonry";
import PorfolioModal from "app/components/PorfolioModal";
import PorsolioInfo from "app/data/containers/porfolio.json";

const { itemList } = PorsolioInfo;
const location = process.env.PUBLIC_URL;

const porfolio = () => {
  const [currentModal, setCurrentModal] = useState({
    showState: false,
    modalData: {},
  });

  const handleSetDataModal = (index, item) => {
    console.log("Se esta seteando el modal", index);
    setCurrentModal({
      showState: true,
      modalData: item,
    });
  };

  return (
    <section id="porfolio-section" className="bg-neutral-alternative1-900 pb-0">
      <GlobalContainer contentSize="xxl">
        <div className="min-h-screen items-center pt-[55px]">
          <div className="grid grid-cols-12 pt-[55px]">
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
                Portafolio
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
              <div className="mx-auto mb-2xl w-11/12 text-center md:w-9/12">
                <Masonry
                  columns={{ sx: 1, md: 3 }}
                  spacing={2}
                  className="mx-0"
                >
                  {itemList.map((item, index) => (
                    <div key={index} data-aos="fade-up" data-aos-once="true">
                      <GlobalItemPorfolio
                        title={item.title}
                        body={item.summari}
                        img={{ src: location + item.img_portada, alt: item.title }}
                        onClick={() => handleSetDataModal(index, item)}
                      />
                    </div>
                  ))}
                </Masonry>
              </div>
            </div>
          </div>
        </div>
        <PorfolioModal
          open={currentModal.showState}
          handleClose={() =>
            setCurrentModal({
              showState: false,
              modalData: {},
            })
          }
          contentInfo={currentModal.modalData}
        />
      </GlobalContainer>
    </section>
  );
};

export default porfolio;
