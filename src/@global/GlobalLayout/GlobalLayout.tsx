import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import GlobalFooter from "@global/GlobalFooter";
import GlobalHeader from "@global/GlobalHeader";
import GlobalLoadingDialog from "@global/GlobalLoadingDialog";
import EvaLogo from "app/assets/Footer/logo-eva.svg";
import BpLogo from "app/assets/Header/logoHeader.svg";
import sponsorData from "app/data/configuration/brand/sponsorData.json";
import { homeRoute } from "app/routes";

const GlobalLayout = () => {
  // todo ver si se saca la ruta de imagen directo de configuracion (public?)
  const footerContent = sponsorData.footer;
  footerContent.platformLogo.src = EvaLogo;

  const headerLogoContent = {
    alt: sponsorData.header.alt,
    url: homeRoute,
    src: BpLogo,
  };

  return (
    <>
      <GlobalHeader logo={headerLogoContent} />
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 999999,
              pointerEvents: "none",
            }}
          >
            <GlobalLoadingDialog open />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <GlobalFooter
        platformLogo={footerContent.platformLogo}
        rightsReserved={footerContent.rightsReserved}
        platformInfo={footerContent.platformInfo}
        className={footerContent.className}
      />
    </>
  );
};

export default GlobalLayout;
