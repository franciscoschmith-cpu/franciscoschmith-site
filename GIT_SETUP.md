# Francisco Schmith redesign

Exportação autossuficiente do projeto para subir em um repositório Git.

## Rodar localmente

```bash
pnpm install
pnpm dev
```

Para gerar a versão de produção:

```bash
pnpm run build
pnpm start
```

Os assets usados pela home estão em `client/public/assets/` e os caminhos da aplicação foram ajustados para `/assets/...`. Portanto, esta cópia não depende do armazenamento privado do WebDev.

O projeto é um frontend React + Vite. O `server/` é o servidor estático incluído pelo template.
