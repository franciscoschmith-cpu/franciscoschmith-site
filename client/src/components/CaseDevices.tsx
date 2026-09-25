import "./case-devices.css";

const deviceFrames = {
  laptop: "/assets/macbook-air.webp",
  phone: "/assets/iphone-17-pro.webp",
};

// Screens remain separate from the hardware: replace these paths, not the composition.
const screens: Record<string, { desktop?: string; mobile?: string }> = {
  horikawa: {
    desktop: "/assets/horikawa-desktop.webp",
    mobile: "/assets/horikawa-mobile-responsive_ec351f44.webp",
  },
  mayla: {
    desktop: "/assets/mayla-desktop-responsive_09aee311.webp",
    mobile: "/assets/mayla-mobile-responsive_6781199a.webp",
  },
  mesa: {
    desktop: "/assets/mesa-desktop-responsive.webp",
    mobile: "/assets/mesa-mobile-responsive.webp",
  },
  gestao: {
    desktop: "/assets/gestao-desktop-responsive.webp",
    mobile: "/assets/gestao-mobile-responsive.webp",
  },
  agro: {
    desktop: "/assets/agro-desktop-responsive.webp",
    mobile: "/assets/agro-mobile-responsive.webp",
  },
};

function Screen({ caseKey, title, mobile = false }: { caseKey: string; title: string; mobile?: boolean }) {
  const src = mobile ? screens[caseKey]?.mobile : screens[caseKey]?.desktop;
  return <img className="device-site-image" src={src} alt={`${title}: versão ${mobile ? "mobile" : "desktop"}`} loading="lazy" decoding="async" />;
}

export default function CaseDevices({ caseKey, title }: { caseKey: string; title: string }) {
  const showPhone = Boolean(screens[caseKey]?.mobile);
  return <div className={`case-visual case-visual-${caseKey} ${showPhone ? "with-phone" : "laptop-only"}`} role="group" aria-label={`Apresentação do projeto ${title}`}>
    <div className="product-hardware laptop-hardware">
      <div className={`laptop-viewport screen-${caseKey}`}><Screen caseKey={caseKey} title={title} /></div>
      <img className="hardware-frame" src={deviceFrames.laptop} alt="" aria-hidden="true" width="800" height="460" loading="lazy" />
    </div>
    {showPhone && <div className="product-hardware phone-hardware">
      <div className={`phone-viewport screen-${caseKey}`}>
        <div className="phone-content"><Screen caseKey={caseKey} title={title} mobile /></div>
      </div>
      <img className="hardware-frame" src={deviceFrames.phone} alt="" aria-hidden="true" width="389" height="800" loading="lazy" />
    </div>}
  </div>;
}
