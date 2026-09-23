import CaseDevices from "@/components/CaseDevices";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, CircleDot, Menu, Plus } from "lucide-react";
import { useRef, useState } from "react";

const heroPortraitSrc = "/assets/hero_editorial_portrait_98277498.webp";
const aboutPortraitSrc = "/assets/about_editorial_portrait_3732f601.webp";
const deskSrc = "/assets/process-desk_14ebfaee.jpg";
const whatsappUrl = "https://wa.me/5545999916583?text=Oi%20Francisco%2C%20quero%20conversar%20sobre%20um%20projeto.";

const services = [
  {
    number: "01",
    title: "Sites que orientam",
    text: "Páginas com clareza de oferta, prova e próximo passo, feitas para o cliente entender e agir.",
    tag: "presença + conversão",
  },
  {
    number: "02",
    title: "Sistemas que organizam",
    text: "Ferramentas sob medida para tirar a operação do improviso e devolver visão para quem decide.",
    tag: "operação + controle",
  },
  {
    number: "03",
    title: "Rotinas que rodam",
    text: "Automações pontuais para o trabalho repetitivo deixar de depender de planilha, memória e cobrança.",
    tag: "tempo + consistência",
  },
];

const faqs = [
  ["Você trabalha só com empresas de Cascavel?", "Não. A base é em Cascavel, mas o processo é remoto e funciona com clientes em qualquer lugar do Brasil."],
  ["Você entrega só a interface?", "Não. O projeto começa pelo processo e pode incluir interface, sistema, integrações, treinamento e suporte."],
  ["Como saber o investimento?", "Depois de uma conversa curta sobre o problema, envio uma proposta com escopo, etapas e investimento. Sem orçamento genérico."],
];

const portfolioCases = [
  { type: "site de academia / dojo", title: "Horikawa Dojo", copy: "Jiu-jitsu, MMA e wrestling: um dojo para começar, evoluir ou competir.", domain: "horikawadojo.com.br", href: "https://www.horikawadojo.com.br", theme: "dojo", mark: "道", visual: "horikawa" },
  { type: "site de estética facial", title: "Mayla Ferraz", copy: "Estética facial personalizada, com cuidado delicado e foco na saúde da pele.", domain: "maylaferraz.com.br", href: "https://www.maylaferraz.com.br", theme: "skin", mark: "MF", visual: "mayla" },
  { type: "sistema de gestão", title: "Gestão para Mayla", copy: "Uma operação mais organizada por trás de uma experiência de atendimento premium.", domain: "projeto interno", href: "https://www.maylaferraz.com.br", theme: "system", mark: "01", visual: "system" },
  { type: "edutec com IA", title: "AgroVanguard", copy: "Educação e tecnologia para aproximar conhecimento do agronegócio.", domain: "agrovanguard.com.br", href: "https://www.agrovanguard.com.br", theme: "agro", mark: "AV", visual: "agro" },
];

const featuredCases = [
  { key: "horikawa", index: "01", type: "site institucional · dojo", title: "Horikawa Dojo", headline: "Um site que traduz disciplina em caminho.", text: "Uma presença digital para apresentar modalidades, turmas, equipe e a primeira visita sem intimidar quem está começando.", result: "clareza para quem chega · estrutura para quem evolui", href: "https://www.horikawadojo.com.br", domain: "horikawadojo.com.br" },
  { key: "mayla", index: "02", type: "site institucional · estética facial", title: "Mayla Ferraz", headline: "Cuidado premium começa antes do agendamento.", text: "Uma experiência digital delicada para explicar protocolos, transmitir confiança e levar a pessoa certa para a conversa.", result: "acolhimento + personalização + agendamento", href: "https://www.maylaferraz.com.br", domain: "maylaferraz.com.br" },
  { key: "agro", index: "03", type: "edutec · agronegócio + IA", title: "AgroVanguard", headline: "Conhecimento aplicado para um setor que não para.", text: "Uma edutec para aproximar formação, agronegócio e tecnologia em uma experiência mais acessível.", result: "educação + IA aplicada ao agro", href: "https://www.agrovanguard.com.br", domain: "agrovanguard.com.br" },
  { key: "mesa", index: "04", type: "produto digital · operação", title: "Mesa", headline: "Uma operação mais simples para quem precisa vender.", text: "Case reservado para mostrar como o produto organiza pedidos, rotina e decisão em uma experiência direta.", result: "telas do produto · operação · clareza", href: "#contato", domain: "produto Mesa" },
  { key: "gestao", index: "05", type: "sistema de gestão · SaaS", title: "Gestão para Mayla", headline: "A experiência premium também acontece nos bastidores.", text: "Um sistema para organizar atendimento, recorrência e visão da operação sem perder o cuidado da marca.", result: "sistema sob medida · visão · consistência", href: "#contato", domain: "SaaS interno · Mayla" },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const casesRef = useRef<HTMLDivElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const scrollCases = (direction: number) => {
    casesRef.current?.scrollBy({ left: direction * 355, behavior: "smooth" });
  };

  const changeFeature = (direction: number) => {
    setActiveFeature((current) => (current + direction + featuredCases.length) % featuredCases.length);
  };

  return (
    <main className="site-shell">
      <section className="hero" id="inicio">
        <div className="hero-glow" />
        <header className="nav container">
          <button className="brand" onClick={() => scrollTo("#inicio")} aria-label="Voltar ao início">
            <span className="brand-mark">FS</span>
            <span>Francisco<br />Schmith</span>
          </button>
          <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
            <button onClick={() => scrollTo("#servicos")}>Serviços</button>
            <button onClick={() => scrollTo("#cases")}>Cases</button>
            <button onClick={() => scrollTo("#sobre")}>Sobre</button>
            <button onClick={() => scrollTo("#faq")}>FAQ</button>
          </nav>
          <button className="nav-cta" onClick={() => window.open(whatsappUrl, "_blank")}>Falar sobre um projeto <ArrowUpRight size={14} /></button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu"><Menu size={20} /></button>
        </header>

        <div className="hero-content container">
          <div className="hero-copy">
            <div className="eyebrow light"><span className="eyebrow-dot" /> estratégia antes da tecnologia</div>
            <h1>Seu negócio não precisa {"de\u00a0mais"}<br />{"uma\u00a0ferramenta."}<br /><em>Precisa de um sistema que faça sentido.</em></h1>
            <p className="hero-lede">Eu transformo processos espalhados em sites, sistemas e automações simples de usar. Você vende, decide e opera com menos improviso.</p>
            <div className="hero-actions">
              <button className="button button-acid" onClick={() => window.open(whatsappUrl, "_blank")}>Me conta o problema <ArrowRight size={16} /></button>
              <button className="text-link light-link" onClick={() => scrollTo("#cases")}>Ver como isso funciona <ArrowDown size={15} /></button>
            </div>
            <div className="hero-proof"><span>Atendimento remoto</span><span className="proof-line" /><span>Cascavel, PR · Brasil</span></div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={heroPortraitSrc} alt="Francisco Schmith sentado, em retrato editorial com iluminação verde discreta" width={2048} height={1365} fetchPriority="high" />
              <div className="portrait-tint" />
              <div className="portrait-caption"><span>Francisco Schmith</span><span>produto digital · 2026</span></div>
            </div>
            <div className="hero-note note-top"><span className="note-index">/ 01</span><span>pensar</span></div>
            <div className="hero-note note-bottom"><span className="note-index">/ 02</span><span>construir</span></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          </div>
        </div>
        <div className="hero-bottom container"><span className="scroll-indicator" aria-label="Mais conteúdo abaixo"><ArrowDown size={16} /></span></div>
      </section>

      <section className="intro-section section-pad" id="servicos">
        <div className="container intro-grid">
          <div className="section-label"><span className="label-number">01</span><span>o ponto de partida</span></div>
          <div className="intro-main">
            <h2>O gargalo raramente é a falta de tecnologia. <span>É a falta de clareza.</span></h2>
            <p className="intro-lede">Antes de abrir o editor, eu entendo onde o negócio perde tempo, informação ou oportunidade. Só então escolho o que precisa ser construído e o que pode continuar simples.</p>
            <div className="signal-row">
              <div className="signal"><span className="signal-icon">↗</span><div><strong>menos ruído</strong><span>um lugar certo para cada coisa</span></div></div>
              <div className="signal"><span className="signal-icon">◎</span><div><strong>mais visão</strong><span>decisões baseadas no processo real</span></div></div>
            </div>
          </div>
          <div className="intro-aside"><span className="aside-quote">“A tecnologia entra depois que o problema ficou claro.”</span><span className="aside-author">princípio de trabalho</span></div>
        </div>
      </section>

      <section className="services-section section-pad dark-section">
        <div className="container">
          <div className="section-head split-head"><div><div className="eyebrow"><span className="eyebrow-dot" /> o que eu faço</div><h2>Três caminhos.<br /><em>Um mesmo objetivo.</em></h2></div><p>Escolher a ferramenta certa é parte do trabalho. Saber o que não construir também.</p></div>
          <div className="service-list">
            {services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><span className="service-tag">{service.tag}</span></article>)}
          </div>
        </div>
      </section>

      <section className="cases-section section-pad" id="cases">
        <div className="container">
          <div className="section-head cases-head"><div><div className="eyebrow"><span className="eyebrow-dot" /> casos selecionados</div><h2>Do problema<br /><em>para o próximo passo.</em></h2></div><p>Não são telas soltas. Cada projeto começa com uma fricção concreta da operação.</p></div>
          {(() => { const item = featuredCases[activeFeature]; return <article className={`featured-case-slide ${item.key}`}>
            <div className="featured-case-copy"><div className="case-kicker">{item.index} / {String(featuredCases.length).padStart(2, "0")} · {item.type}</div><h3>{item.title}</h3><h4>{item.headline}</h4><p>{item.text}</p><div className="case-result"><span className="result-mark"><Check size={14} /></span><div><span className="result-label">o que a entrega precisa fazer</span><strong>{item.result}</strong></div></div>{item.href.startsWith("#") ? <span className="case-pending-note">Apresentação visual em preparação</span> : <a className="text-link dark-link" href={item.href} target="_blank" rel="noreferrer">Visitar projeto <ArrowUpRight size={15} /></a>}</div>
            <CaseDevices caseKey={item.key} title={item.title} />
            <div className="featured-case-nav"><div className="featured-dots">{featuredCases.map((feature, index) => <button className={index === activeFeature ? "active" : ""} onClick={() => setActiveFeature(index)} aria-pressed={index === activeFeature} key={feature.key} aria-label={`Mostrar ${feature.title}`}>{feature.title}</button>)}</div><div className="featured-arrows"><button onClick={() => changeFeature(-1)} aria-label="Case anterior">←</button><button onClick={() => changeFeature(1)} aria-label="Próximo case">→</button></div></div>
          </article>; })()}

        </div>
      </section>

      <section className="method-section dark-section section-pad">
        <div className="container method-grid"><div><div className="eyebrow"><span className="eyebrow-dot" /> como funciona</div><h2>Clareza para começar.<br /><em>Presença para entregar.</em></h2><img className="desk-image" src={deskSrc} alt="Mesa de trabalho com mapa de processo" /></div><div className="steps"><div className="step"><span>01</span><div><h3>Conversa sem roteiro pronto</h3><p>Você me conta onde a operação trava. Eu faço as perguntas certas antes de sugerir a solução.</p></div></div><div className="step"><span>02</span><div><h3>Escopo que cabe na realidade</h3><p>Uma proposta enxuta, com etapas, investimento e o que fica de fora. Sem surpresa no meio do caminho.</p></div></div><div className="step"><span>03</span><div><h3>Construção com você por perto</h3><p>O projeto avança em ciclos curtos, com validações reais e espaço para ajustar o que importa.</p></div></div><div className="step"><span>04</span><div><h3>Entrega que não abandona</h3><p>Treinamento, documentação essencial e suporte para o negócio seguir funcionando depois do lançamento.</p></div></div></div></div>
      </section>

      <section className="about-section section-pad" id="sobre">
        <div className="container about-grid"><div className="about-photo"><img src={aboutPortraitSrc} alt="Francisco Schmith de blazer escuro em retrato profissional" width={1638} height={2048} loading="lazy" decoding="async" /><span>02 / 06</span></div><div className="about-copy"><div className="eyebrow"><span className="eyebrow-dot" /> sobre o trabalho</div><h2>Eu gosto de tecnologia.<br /><em>Mas gosto mais de contexto.</em></h2><p>Sou Francisco Schmith. Minha formação mistura Engenharia Agrícola, agronegócio, educação e produto digital. Essa trajetória me ensinou a olhar primeiro para o funcionamento das coisas e só depois para o código.</p><p>Hoje, ajudo negócios a transformar processos confusos em experiências mais simples para quem vende, atende e decide.</p><div className="about-tags"><span>Engenharia Agrícola</span><span>MBA em Agronegócio</span><span>Produto digital</span><span>Marketing</span></div><button className="text-link dark-link" onClick={() => scrollTo("#contato")}>Conhecer o meu jeito de trabalhar <ArrowRight size={15} /></button></div></div>
      </section>

      <section className="faq-section section-pad" id="faq"><div className="container faq-grid"><div><div className="eyebrow"><span className="eyebrow-dot" /> perguntas frequentes</div><h2>Antes de<br /><em>começar.</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? "faq-item open" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span>{openFaq === index ? <CircleDot size={16} /> : <Plus size={18} />}</button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></div></section>

      <section className="contact-section" id="contato"><div className="container contact-inner"><div><div className="eyebrow light"><span className="eyebrow-dot" /> próximo passo</div><h2>Tem um processo<br /><em>pedindo clareza?</em></h2><p>Me conta onde a operação trava. Se eu puder ajudar, a gente descobre isso na primeira conversa.</p></div><button className="button button-acid contact-button" onClick={() => window.open(whatsappUrl, "_blank")}>Abrir conversa no WhatsApp <ArrowUpRight size={16} /></button></div><footer className="container footer"><div className="footer-brand"><span className="brand-mark">FS</span><span>Francisco Schmith<br /><small>Cascavel, Paraná · Brasil</small></span></div><div className="footer-links"><button onClick={() => scrollTo("#inicio")}>voltar ao topo ↑</button><a href="mailto:oi@franciscoschmith.com">oi@franciscoschmith.com</a><span>© 2026</span></div></footer></section>
    </main>
  );
}
