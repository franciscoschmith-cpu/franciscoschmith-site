import "./case-devices.css";

const deviceFrames = {
  laptop: "/assets/macbook-air_8c072be1.png",
  phone: "/assets/iphone-17-pro_14f6938d.png",
};

// Screens remain separate from the hardware: replace these paths, not the composition.
const screens: Record<string, { desktop?: string; mobile?: string }> = {
  horikawa: {
    desktop: "/assets/pasted_file_RmRtGC_image_aafe7c50.png",
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
  gestao: {},
};

function Screen({ caseKey, title, mobile = false }: { caseKey: string; title: string; mobile?: boolean }) {
  const src = mobile ? screens[caseKey]?.mobile : screens[caseKey]?.desktop;
  if (src) {
    return <img className="device-site-image" src={src} alt={`${title}: versão ${mobile ? "mobile" : "desktop"}`} loading="lazy" decoding="async" />;
  }
  if (caseKey === "agro") {
    return <div className="device-concept">
      <span className="device-concept-brand">AgroVanguard</span>
      <span className="device-concept-label">Educação · agronegócio · IA</span>
      <strong>Conhecimento<br />que cultiva<br /><em>o futuro.</em></strong>
      <span className="device-concept-disclaimer">Prévia conceitual · aguardando tela real</span>
    </div>;
  }
  return <div className={`device-screen-pending ${caseKey === "gestao" ? "pending-mayla" : ""}`}>
    <div className="pending-corners" aria-hidden="true" />
    <strong>{caseKey === "mesa" ? "Mesa" : "Mayla"}</strong>
    <span>Telas em breve</span>
  </div>;
}

export default function CaseDevices({ caseKey, title }: { caseKey: string; title: string }) {
  const showPhone = Boolean(screens[caseKey]?.mobile) || caseKey === "mesa";
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
