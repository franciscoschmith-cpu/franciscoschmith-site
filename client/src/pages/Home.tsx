import CaseDevices from "@/components/CaseDevices";
import { content } from "@/content";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, CircleDot, Menu, Minus, Plus } from "lucide-react";
import { useState } from "react";

const heroPortraitSrc = "/assets/hero-portrait.webp";
const aboutPortraitSrc = "/assets/about-portrait.webp";
const deskSrc = "/assets/process-desk.webp";
const whatsappUrl = "https://wa.me/5545999916583?text=Oi%20Francisco%2C%20quero%20conversar%20sobre%20um%20projeto.";

const faqs: [string, string][] = [
  ["Você trabalha só com empresas de Cascavel?", "Não. A base é em Cascavel, mas o processo é remoto e funciona com clientes em qualquer lugar do Brasil."],
  ["Quanto tempo leva um projeto?", "Depende do tipo de projeto. Um site costuma avançar mais rápido que um sistema ou uma automação, que são divididos em etapas para validar o que importa primeiro."
    + (content.faq.prazoPorTipo ? ` Prazo médio por tipo de projeto: ${content.faq.prazoPorTipo}.` : "")],
  ["Você entrega só a interface?", "Não. O projeto pode incluir estratégia, interface, sistema, integrações, treinamento e documentação essencial."],
  ["Eu preciso fornecer todo o conteúdo?", "Você traz o conhecimento do negócio. Eu ajudo a organizar a informação, definir a estrutura e identificar o que ainda precisa ser produzido."],
  ["Existe suporte depois da entrega?", "Sim. A entrega inclui treinamento e documentação para você seguir usando o que foi construído."
    + (content.faq.autonomiaEdicao ? ` Sobre a autonomia para editar depois: ${content.faq.autonomiaEdicao}.` : "")
    + (content.faq.comoFuncionaSuporte ? ` Sobre como funciona o suporte: ${content.faq.comoFuncionaSuporte}.` : "")],
  ["Como saber o investimento?", "Depois de uma conversa curta sobre o problema, envio uma proposta com escopo, etapas e investimento. Sem orçamento genérico."
    + (content.faq.precoFaixa ? ` Como referência, a faixa de preço costuma ficar em ${content.faq.precoFaixa}.` : "")],
];

const featuredCases = [
  { key: "horikawa", index: "01", type: "case · site para academia", title: "Horikawa Dojo", headline: "Um site que traduz disciplina em caminho.", text: "Uma presença digital para apresentar modalidades, turmas, equipe e a primeira visita sem intimidar quem está começando.", result: "clareza para quem chega · estrutura para quem evolui", href: "https://www.horikawadojo.com.br", domain: "horikawadojo.com.br" },
  { key: "mayla", index: "02", type: "case · site de estética", title: "Mayla Ferraz", headline: "Cuidado premium começa antes do agendamento.", text: "Uma experiência digital delicada para explicar protocolos, transmitir confiança e levar a pessoa certa para a conversa.", result: "acolhimento + personalização + agendamento", href: "https://www.maylaferraz.com.br", domain: "maylaferraz.com.br" },
  { key: "agro", index: "03", type: "case · edutec com IA", title: "AgroVanguard", headline: "Conhecimento aplicado para um setor que não para.", text: "Educação e tecnologia para aproximar conhecimento do agronegócio em uma experiência digital mais acessível.", result: "educação + tecnologia + agronegócio", href: "https://agrovanguard.com.br", domain: "agrovanguard.com.br" },
  { key: "mesa", index: "04", type: "case · gestão de torneios", title: "Mesa", headline: "Chaveamento e resultado ao vivo, sem planilha.", text: "Um sistema para organizar atletas, categorias, chaveamento e a fila de lutas de um torneio de jiu-jitsu em tempo real.", result: "atletas · categorias · chaveamento · placar ao vivo", href: "#contato", domain: "produto Mesa" },
  { key: "gestao", index: "05", type: "case · sistema de gestão", title: "Gestão para Mayla", headline: "A experiência premium também acontece nos bastidores.", text: "Um sistema para organizar atendimento, recorrência e visão da operação sem perder o cuidado da marca.", result: "sistema sob medida · visão · consistência", href: "#contato", domain: "SaaS interno · Mayla" },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
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
            <div className="eyebrow light"><span className="eyebrow-dot" /> {content.hero.eyebrow}</div>
            <h1>{content.hero.titleStrong}<br /><em>{content.hero.titleSerif}</em></h1>
            <p className="hero-lede">{content.hero.subtitle}</p>
            <div className="hero-actions">
              <button className="button button-acid" onClick={() => window.open(whatsappUrl, "_blank")}>{content.hero.ctaPrimary} <ArrowRight size={16} /></button>
              <button className="text-link light-link" onClick={() => scrollTo("#cases")}>{content.hero.ctaSecondary} <ArrowDown size={15} /></button>
            </div>
            <div className="hero-proof"><span>{content.hero.proofLeft}</span><span className="proof-line" /><span>{content.hero.proofRight}</span></div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={heroPortraitSrc} alt="Francisco Schmith sentado, em retrato editorial com iluminação verde discreta" width={840} height={560} fetchPriority="high" decoding="async" />
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
            <h2>{content.intro.titleStrong}<br /><em>{content.intro.titleSerif}</em></h2>
            <p className="intro-lede">{content.intro.text}</p>
            <div className="signal-row">
              <div className="signal"><span className="signal-icon"><Minus size={15} strokeWidth={1.5} /></span><div><strong>menos ruído</strong><span>um lugar certo para cada coisa</span></div></div>
              <div className="signal"><span className="signal-icon">◎</span><div><strong>mais visão</strong><span>decisões baseadas no processo real</span></div></div>
            </div>
          </div>
          <div className="intro-aside"><span className="aside-quote">“{content.intro.quote}”</span><span className="aside-author">princípio de trabalho</span></div>
        </div>
      </section>

      <section className="services-section section-pad dark-section">
        <div className="container">
          <div className="section-head split-head"><div><div className="eyebrow"><span className="eyebrow-dot" /> o que eu faço</div><h2>{content.services.titleStrong}<br /><em>{content.services.titleSerif}</em></h2></div><p>{content.services.subtitle}</p></div>
          <div className="service-list">
            {content.services.items.map((service) => <article className="service-row commercial-service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-main"><h3>{service.title}</h3><p><strong>O que é:</strong> {service.oQueE}</p></div>
              <div className="service-detail"><p><strong>Por que se contrata:</strong> {service.porQue}</p><span className="service-tag">{service.tag}</span></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="cases-section section-pad" id="cases">
        <div className="container">
          <div className="section-head cases-head"><div><div className="eyebrow"><span className="eyebrow-dot" /> casos selecionados</div><h2>Projetos que<br /><em>viraram experiência.</em></h2></div></div>
          <div className="commercial-case-grid">
            {featuredCases.map((item) => <article className={`commercial-case-card ${item.key}`} key={item.key}>
              <div className="commercial-case-copy"><div className="case-kicker">{item.type}</div><h3>{item.title}</h3><h4>{item.headline}</h4><p>{item.text}</p><div className="case-result"><span className="result-mark"><Check size={14} /></span><div><span className="result-label">o que este projeto precisava resolver</span><strong>{item.result}</strong></div></div>{item.href.startsWith("#") ? <span className="case-pending-note">Apresentação visual em preparação</span> : <a className="text-link dark-link" href={item.href} target="_blank" rel="noreferrer">Visitar projeto <ArrowUpRight size={15} /></a>}</div>
              <CaseDevices caseKey={item.key} title={item.title} />
            </article>)}
          </div>
        </div>
      </section>

      <section className="method-section dark-section section-pad">
        <div className="container method-grid"><div><div className="eyebrow"><span className="eyebrow-dot" /> como funciona</div><h2>{content.method.titleStrong}<br /><em>{content.method.titleSerif}</em></h2><img className="desk-image" src={deskSrc} alt="Mesa de trabalho com mapa de processo" width={1400} height={1050} loading="lazy" decoding="async" /></div><div className="steps">{content.method.steps.map((step) => <div className="step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></div>)}{content.method.prazoMedio && <p className="method-note">Prazo médio: {content.method.prazoMedio}</p>}</div></div>
      </section>

      <section className="about-section section-pad" id="sobre">
        <div className="container about-grid"><div className="about-photo"><img src={aboutPortraitSrc} alt="Francisco Schmith de blazer escuro em retrato profissional" width={640} height={800} loading="lazy" decoding="async" /><span>02 / 06</span></div><div className="about-copy"><div className="eyebrow"><span className="eyebrow-dot" /> sobre o trabalho</div><h2>{content.about.titleStrong}<br /><em>{content.about.titleSerif}</em></h2><p>Sou Francisco Schmith, de Cascavel. Minha formação mistura <strong>Engenharia Agrícola</strong>, <strong>agronegócio</strong>, educação e produto digital, e trabalhei com marketing antes de construir software.</p><p>Isso muda o jeito que eu trabalho: ferramenta que ignora como a equipe realmente opera é abandonada em duas semanas, por melhor que seja. Por isso meus projetos começam com pergunta e só depois viram sistema.</p><div className="about-tags">{content.about.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><button className="text-link dark-link" onClick={() => scrollTo("#contato")}>Conhecer o meu jeito de trabalhar <ArrowRight size={15} /></button></div></div>
      </section>

      <section className="faq-section section-pad" id="faq"><div className="container faq-grid"><div><div className="eyebrow"><span className="eyebrow-dot" /> perguntas frequentes</div><h2>{content.faq.titleStrong}<br /><em>{content.faq.titleSerif}</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={openFaq === index ? "faq-item open" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span>{openFaq === index ? <CircleDot size={16} /> : <Plus size={18} />}</button><div className="faq-answer"><p>{answer}</p></div></div>)}</div></div></section>

      <section className="contact-section" id="contato"><div className="container contact-inner"><div><div className="eyebrow light"><span className="eyebrow-dot" /> próximo passo</div><h2>{content.cta.titleStrong}<br /><em>{content.cta.titleSerif}</em></h2><p>{content.cta.text}</p></div><button className="button button-acid contact-button" onClick={() => window.open(whatsappUrl, "_blank")}>{content.cta.button} <ArrowUpRight size={16} /></button></div><footer className="container footer"><div className="footer-brand"><span className="brand-mark">FS</span><span>Francisco Schmith<br /><small>Cascavel, Paraná · Brasil</small></span></div><div className="footer-links"><button onClick={() => scrollTo("#inicio")}>voltar ao topo ↑</button><a href="mailto:oi@franciscoschmith.com">oi@franciscoschmith.com</a><span>© 2026</span></div></footer></section>
    </main>
  );
}
