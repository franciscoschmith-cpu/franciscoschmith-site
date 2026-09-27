// Conteúdo editável do site. Campos vazios ("") marcam um [PREENCHER]:
// a interface esconde a linha ou o trecho correspondente enquanto o campo
// estiver vazio, sem deixar rótulo órfão nem espaço em branco.

export const content = {
  hero: {
    eyebrow: "sites, sistemas e automações",
    titleStrong: "Construo site, sistema e automação",
    titleSerif: "para o seu negócio funcionar sem depender de você.",
    subtitle: "Quem procura te encontra, a informação fica no lugar certo e as tarefas repetidas param de consumir seu dia.",
    ctaPrimary: "Me conta o que está travando",
    ctaSecondary: "Ver como funciona",
    proofLeft: "Cascavel, PR",
    proofRight: "Atendimento em todo o Brasil",
  },

  intro: {
    titleStrong: "Antes de construir qualquer coisa,",
    titleSerif: "eu entendo como o seu negócio funciona hoje.",
    text: "Quase todo negócio que me procura já tem ferramenta demais. Agenda num lugar, venda em outro, cliente no WhatsApp e o financeiro numa planilha que só uma pessoa entende. Comprar mais um sistema não resolve isso. Por isso eu começo entendendo a sua operação, e só então decido o que precisa ser construído e o que pode continuar simples.",
    quote: "A tecnologia entra depois que o problema ficou claro.",
  },

  services: {
    titleStrong: "Três coisas que eu construo.",
    titleSerif: "E o motivo pelo qual alguém contrata cada uma.",
    subtitle: "Escolher a ferramenta certa é parte do trabalho. Saber o que não construir também.",
    items: [
      {
        number: "01",
        title: "Site",
        oQueE: "Uma página que explica seu serviço, mostra o que você já entregou e responde as dúvidas de sempre, antes que a pessoa pergunte.",
        porQue: "Para ser encontrado por quem ainda não te conhece e passar confiança antes do primeiro contato.",
        tag: "seu negócio responde por você",
      },
      {
        number: "02",
        title: "Sistema sob medida",
        oQueE: "Agenda, clientes, vendas e financeiro em uma tela só, construído em cima do jeito que você já trabalha.",
        porQue: "Porque o sistema pronto não encaixa e a planilha para de funcionar quando o volume cresce.",
        tag: "a operação deixa de ser sua memória",
      },
      {
        number: "03",
        title: "Automação",
        oQueE: "O que alguém faz na mão hoje passa a acontecer sozinho. O orçamento que leva quarenta minutos, o aviso de retorno do cliente, a primeira resposta no WhatsApp.",
        porQue: "Porque tarefa repetida consome o dia e cliente que espera compra de quem respondeu primeiro.",
        tag: "o tempo volta pra você",
      },
    ],
  },

  method: {
    titleStrong: "Como eu trabalho.",
    titleSerif: "Para você saber no que está entrando antes de contratar.",
    steps: [
      { number: "01", title: "Conversa sem roteiro pronto.", text: "Você me conta onde a operação trava. Eu faço as perguntas certas antes de sugerir qualquer solução." },
      { number: "02", title: "Proposta sem letra miúda.", text: "Escopo, etapas, prazo, investimento e o que fica de fora. Sem surpresa no meio do caminho." },
      { number: "03", title: "Você acompanha, não espera.", text: "O projeto avança em ciclos curtos, com validação real, e dá para ajustar o que importa." },
      { number: "04", title: "Entrega que não abandona.", text: "Treinamento da equipe, documentação do essencial e suporte depois do lançamento." },
    ],
    // [PREENCHER] prazo médio de entrega. Enquanto vazio, a linha some do layout.
    prazoMedio: "",
  },

  about: {
    titleStrong: "Eu começo pelo negócio,",
    titleSerif: "não pela tela.",
    tags: ["Engenharia Agrícola", "MBA Agronegócio", "Produto digital", "Marketing"],
  },

  faq: {
    titleStrong: "O que você quer saber",
    titleSerif: "antes de me chamar.",
    // [PREENCHER] os quatro campos abaixo. Cada um alimenta uma frase que só
    // aparece na resposta correspondente quando o campo estiver preenchido.
    precoFaixa: "",
    prazoPorTipo: "",
    autonomiaEdicao: "",
    comoFuncionaSuporte: "",
  },

  cta: {
    titleStrong: "Me conta o que está travando.",
    titleSerif: "Em uma conversa a gente descobre se eu resolvo.",
    text: "Escopo, prazo e investimento saem da primeira conversa. Se não for o meu tipo de projeto, eu digo na hora.",
    button: "Abrir conversa no WhatsApp",
  },
};
