# Design System — Ype Home Center

## 1. Tema Visual & Atmosfera

O sistema de design do Ype Home Center é uma **vitrine de autoridade técnica e confiança regional** — a identidade visual de quem conhece cada detalhe de uma obra antes do cliente formular a pergunta. A paleta nasce da árvore ipê: o ouro intenso de suas flores (`#C8860A`) ancora toda a hierarquia de ação do sistema; o verde-floresta profundo de seu tronco (`#162019`) define os momentos de maior peso — bandas de destaque, footer, headlines — dando ao site a seriedade de uma empresa consolidada. A superfície oscila entre um off-white quente e pergaminhado (`#F8F4ED`) e branco de card (`#FFFFFF`), evocando materiais físicos: papel de projeto, ficha técnica, catálogo de acabamentos.

Não há e-commerce aqui. O sistema não foi projetado para converter cliques em vendas — foi projetado para **converter visitantes em clientes que chegam na loja com confiança**. Cada componente carrega essa intenção: a navegação é enciclopédica (modelo sertao.com.br), os cards de categoria comunicam amplitude de portfólio, as seções de expertise transmitem profundidade técnica, e o tom editorial é de consultor, nunca de vendedor.

A tipografia usa **DM Sans** como voz principal — uma sans humanista com personalidade própria, sóbria mas não fria, que lê bem em texto técnico e em manchetes amplas. Para momentos editoriais de maior prestígio — laudas de projeto, destaques de departamento — entra **DM Serif Display**, uma serifa com slab-feel que referencia a resistência da madeira ipê e o peso de um catálogo de arquitetura.

Os botões seguem geometria de pill moderado (`32px` radius) — não o full-pill do Starbucks nem o quadrado das plataformas B2B. É um compromisso entre acessibilidade amigável e autoridade técnica. Sombras são usadas com parcimônia: os cards flutuam com camadas de `0.10/0.18` alpha; a elevação real é reservada para o FAB de WhatsApp e modais. A regra de ouro do sistema é **cor-bloco**: nenhuma seção usa gradiente decorativo — a fotografia de ambiente e os materiais físicos fazem o trabalho visual pesado.

**Características-chave:**
- Sistema bi-tier de cor: Ype Gold (ação) + Forest Deep (autoridade) — cada um com papel insubstituível
- Canvas parchment (`#F8F4ED`) como superfície universal de página — nunca branco puro na base
- Serifa contextual DM Serif Display para moments editoriais; DM Sans para tudo mais
- Pill moderado `32px` radius em todos os botões — postura técnica, não consumidora
- Mega-menu de categorias inspirado em sertao.com.br — enciclopédico e bem organizado
- Feature band Forest Deep com texto branco: o bookend escuro que ancora o topo e o rodapé
- Sem price cards, sem badges de desconto, sem contadores regressivos — este não é um site de ofertas
- Fotografia editorial de projetos concluídos como principal recurso de confiança

**Ritmo de cor por seção (de cima para baixo):**
Topbar Forest Deep → Navbar Branco → Hero Parchment com feature band Forest Deep → Seções alternadas Branco / Parchment → Seção de expertise Forest Deep → Parceiros Branco → Inspirações Parchment → Lojas Branco → Footer Forest Deep.

---

## 2. Paleta de Cores & Funções

**Páginas de referência:** homepage, departamentos, quem somos, nossas lojas, blog/inspirações, fale conosco.

### Primárias

- **Ype Gold** (`#C8860A`): O ouro das flores do ipê. CTA primário ("Visite nossa loja", "Fale com um especialista", "Ver tablóide"), active nav indicator, ícones de ação, destaques de preço em seções editoriais. A única cor quente que compite com o Forest Deep em peso visual.
- **Ype Gold Light** (`#F5D98F`): Tint do ouro para fundos de badges informativos, hover de button-soft, e o glow sutil por trás de ícones em superfícies claras.
- **Ype Gold Pale** (`#FBF3DD`): Lavagem de fundo em seções de parceiro ou destaque sutil — a versão mais suave do ouro, quase imperceptível.
- **Forest Deep** (`#162019`): O verde-floresta do tronco do ipê. Bandas de feature, footer, topbar, headlines H1/H2 em superfícies claras, e background do mega-menu. O âncora escuro do sistema — oposto ao Gold.
- **Forest Mid** (`#243D28`): Verde médio para hover de elementos Forest Deep, e para overlays de fotografia (gradient scrim de 60% sobre imagens de hero de departamento).
- **Forest Soft** (`#3A5C3F`): Variante mais acessível do Forest Mid para textos em superfícies médias e links ativos em dark surface.

### Superfícies & Background

- **Parchment** (`#F8F4ED`): O canvas paginado principal — toda a página repousa sobre esta cor. Referencia papel de projeto, ficha técnica, catálogo físico.
- **Parchment Deep** (`#EDE9E0`): Separator de zona, surface wash de seções utilitárias, background de filtros em sidebar.
- **Canvas White** (`#FFFFFF`): Superfície de cards, navbar, inputs, modais. Contraste limpo sobre Parchment.
- **Concrete Light** (`#F1F3F5`): Background de tags de categoria, chips de filtro inativos, meta-textos em baixo contraste. Referência visual ao concreto bruto dos ambientes de obra.
- **Steel** (`#6B7A8D`): Cinza-aço médio para texto secundário, subtítulos de seção, ícones de suporte. Referência a materiais metálicos de construção.

### Neutros & Texto

- **Text Deep** (`rgba(22, 32, 25, 0.92)`): Texto principal em superfícies claras. Derivado do Forest Deep com 8% de transparência — lê mais quente que preto puro.
- **Text Mid** (`rgba(22, 32, 25, 0.60)`): Texto secundário, subtítulos, meta-informações em superfície clara.
- **Text Muted** (`rgba(22, 32, 25, 0.38)`): Placeholders, textos desabilitados, labels de formulários inativos.
- **Text White** (`rgba(255, 255, 255, 1.0)`): Texto primário em superfícies Forest Deep.
- **Text White Soft** (`rgba(255, 255, 255, 0.70)`): Texto secundário em superfícies escuras — descrições de footer, legendas de feature band.
- **Text White Muted** (`rgba(255, 255, 255, 0.45)`): Texto terciário em superfícies escuras — copyright, metadados finos no footer.

### Semânticas

- **Success** (`#1E6B3C`): Validação de formulários, confirmações de cadastro, estado de loja aberta.
- **Success Soft** (`#E5F4EC`): Tint de fundo para campos válidos e badges "aberto".
- **Warning** (`#B45309`): Alertas informativos (ex: "consulte disponibilidade"), não usado em cromo principal.
- **Error** (`#C53030`): Estado inválido de formulário, erros de carregamento.
- **Error Tint** (`rgba(197, 48, 48, 0.06)`): Lavagem de fundo em campo inválido.
- **Hairline** (`#D9D4CB`): Divisores entre linhas de tabela, bordas de card default, separadores de coluna de footer.
- **Hairline Soft** (`#EDE9E0`): Versão mais suave — bordas de categoria chips, separadores de seção internos.

### Escalas Alpha (para overlays e sombras)

- Dark ladder: `rgba(0,0,0,0.04)` / `.08` / `.12` / `.18` / `.30` / `.50` / `.72`
- Light ladder: `rgba(255,255,255,0.10)` / `.20` / `.40` / `.60` / `.80` / `.95`

---

## 3. Tipografia

### Família de Fontes

- **Principal:** `"DM Sans", "Helvetica Neue", Helvetica, Arial, sans-serif` — sans humanista com traços ligeiramente irregulares que a humanizam sem comprometer a leitura técnica. Usada em toda a interface.
- **Editorial:** `"DM Serif Display", "Georgia", serif` — serifa de contraste alto com personalidade de título de catálogo de arquitetura. Usada exclusivamente em headlines de seções editoriais (hero principal, feature bands de departamento, títulos de artigos de blog). Nunca em UI chrome.
- **Mono Técnico:** `"DM Mono", "Courier New", monospace` — usada pontualmente em fichas técnicas (especificações de produto, numeração de catálogo, medidas de projetos). Comunica precisão técnica.
- **Fallback de Carregamento:** `"Helvetica Neue", Arial, sans-serif` — o que o usuário vê antes do DM Sans carregar.

### Hierarquia

| Token | Tamanho | Peso | Line Height | Letter Spacing | Fonte | Uso |
|---|---|---|---|---|---|---|
| `display-hero` | 56px | 300 (light) | 1.05 | -0.02em | DM Serif Display | Headline único do hero principal |
| `display-dept` | 40px | 300 | 1.1 | -0.01em | DM Serif Display | Títulos de feature band de departamento |
| `heading-xl` | 32px | 700 | 1.2 | -0.01em | DM Sans | Títulos de seção principais |
| `heading-lg` | 24px | 700 | 1.3 | -0.01em | DM Sans | Títulos de card grande, subseções |
| `heading-md` | 20px | 600 | 1.4 | 0 | DM Sans | Títulos de card padrão, nomes de departamento |
| `heading-sm` | 16px | 600 | 1.5 | 0 | DM Sans | Labels de grupo no mega-menu, cabeçalhos de card pequeno |
| `body-lg` | 18px | 400 | 1.7 | -0.005em | DM Sans | Parágrafo hero, intro de seção editorial |
| `body-md` | 16px | 400 | 1.6 | -0.005em | DM Sans | Corpo de texto padrão |
| `body-sm` | 14px | 400 | 1.5 | 0 | DM Sans | Descrições de card, links de sub-menu |
| `button-lg` | 16px | 600 | 1 | 0.01em | DM Sans | CTAs principais |
| `button-md` | 14px | 600 | 1 | 0.01em | DM Sans | CTAs secundários, chips de categoria |
| `button-sm` | 12px | 600 | 1 | 0.02em | DM Sans | Tags, badges textuais |
| `label-utility` | 11px | 700 uppercase | 1.5 | 0.08em | DM Sans | Topbar, rótulos de seção, labels de coluna no footer |
| `caption` | 12px | 400 | 1.5 | 0 | DM Sans | Metadados, créditos de fotografia, notas de rodapé |
| `mono-spec` | 13px | 400 | 1.6 | 0 | DM Mono | Fichas técnicas, especificações numéricas |

### Princípios

- **Peso como hierarquia:** DM Sans 700 para headings, 600 para botões e labels, 400 para corpo. DM Serif Display 300 para o toque editorial de contraste com a sans pesada do sistema.
- **Tracking inversamente proporcional ao tamanho:** display usa `-0.02em`; body usa `0`; utility labels usam `+0.08em` em uppercase.
- **Serif só em editorial:** DM Serif Display nunca aparece em cards de produto, mega-menu, formulários ou footers. É exclusiva de momentos de impacto editorial.
- **Mono técnico com parcimônia:** DM Mono máximo de 2 ocorrências por página — em fichas de especificação de produto ou numeração de referência de catálogo.
- **Texto nunca é preto puro:** `rgba(22, 32, 25, 0.92)` em superfícies claras corresponde à temperatura do canvas Parchment.

### Substitutos Open-Source

DM Sans, DM Serif Display e DM Mono são todos disponíveis no Google Fonts — nenhum substituto necessário para implementação pública. A família DM é o diferencial do sistema: tudo já é de acesso aberto.

---

## 4. Componentes

### Botões

**1. Primary Filled — "Visite nossa loja / Fale com um especialista"**
- Background: `#C8860A` (Ype Gold)
- Texto: `#FFFFFF`
- Border: `1px solid #C8860A`
- Radius: `32px` (pill moderado)
- Padding: `12px 24px`
- Fonte: DM Sans, 16px, weight 600, letter-spacing `0.01em`
- Shadow: `0 2px 8px rgba(200, 134, 10, 0.28)`
- Active state: `transform: scale(0.97)` + `box-shadow: 0 1px 3px rgba(200,134,10,0.18)`
- Transition: `all 0.18s ease`

**2. Primary Outlined — "Ver tablóide / Saiba mais"**
- Background: `transparent`
- Texto: `#C8860A`
- Border: `1.5px solid #C8860A`
- Mesmos radius/padding/active/transition do Primary Filled
- Hover: preenche suavemente com `rgba(200,134,10,0.07)` de fundo

**3. Forest Filled — "Ir para a loja / Projete agora"** (em superfícies claras)
- Background: `#162019`
- Texto: `#FFFFFF`
- Border: `1px solid #162019`
- Radius `32px`, Padding `12px 24px`
- Shadow: `0 2px 8px rgba(0,0,0,0.18)`
- Active: `scale(0.97)`
- Usado em hero e seções de alto contraste sobre Parchment

**4. White-on-Dark — "Explorar categorias / Ver mais projetos"**
- Background: `#FFFFFF`
- Texto: `#162019`
- Border: `1px solid #FFFFFF`
- Radius `32px`, Padding `12px 24px`
- Usado exclusivamente dentro de feature bands Forest Deep

**5. Outlined-on-Dark — "Conheça nossa história"**
- Background: `transparent`
- Texto: `#FFFFFF`
- Border: `1.5px solid rgba(255,255,255,0.80)`
- Hover: `background: rgba(255,255,255,0.10)`
- Parceiro do White-on-Dark em CTAs duais de feature band (principal + secundário)

**6. Ghost Utility — "Ver todos / Mais produtos"**
- Background: `transparent`
- Texto: `rgba(22, 32, 25, 0.60)` (Text Mid)
- Border: `1px solid #D9D4CB`
- Radius `32px`, Padding `8px 16px`
- Fonte: 14px weight 600
- Hover: fundo `#F1F3F5`
- Usado como CTA terciário em cards e final de grid

**7. Soft Category — chips de departamento**
- Background: `#EDE9E0` (Parchment Deep)
- Texto: `rgba(22,32,25,0.78)`
- Border: `1px solid transparent`
- Radius `32px`, Padding `6px 14px`
- Fonte: 13px weight 600
- Active/Selected: background `#162019`, texto `#FFFFFF`
- Hover: background `#D9D4CB`

**8. FAB WhatsApp — botão flutuante fixo**
- Background: `#25D366`
- Ícone: `#FFFFFF`
- Tamanho: `60px` (padrão), `48px` (mini ao scrollar)
- Radius: `50%`
- Shadow stack: `0 0 0 rgba(0,0,0,0)` base + `0 6px 16px rgba(37,211,102,0.40)` ambient
- Position: `fixed bottom-6 right-6`, z-index elevado
- Active: ambient shadow colapsa + `scale(0.95)`
- Tooltip: "Fale com nosso especialista" em Forest Deep + seta, visível no hover desktop

**9. Back-to-Top FAB**
- Background: `#C8860A` (Ype Gold)
- Ícone: `#FFFFFF` chevron-up
- Tamanho: `48px`, radius `50%`
- Position: `fixed bottom-6 left-6`
- Visível apenas quando `scrollY > 500px` (transição opacity + translateY)

### Cards & Containers

**Card de Departamento (grid de categorias)**
- Background: `#FFFFFF`
- Radius: `16px`
- Shadow: `0 1px 2px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.10)`
- Hover: shadow intensifica `0 4px 16px rgba(0,0,0,0.14)` + `translateY(-4px)`
- Área de ícone/imagem: `160px` altura, fundo `Concrete Light (#F1F3F5)`, radius top `16px`. Ícone SVG 48px centralizado em `Ype Gold`, ou fotografia do departamento em `object-cover`.
- Conteúdo: `p-4`. Nome em `heading-md`, descrição em `body-sm Text Mid`, link ghost "Ver tudo →".
- Usado no grid de departamentos: `4-up desktop → 3-up tablet → 2-up mobile`

**Card de Marca Parceira**
- Background: `#FFFFFF`
- Radius: `12px`
- Shadow: `0 0 0 1px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.10)`
- Área: logo da marca centrado sobre fundo branco, `80px` de altura reservada
- Sem texto adicional — o logo fala por si. Hover: shadow leve + `scale(1.02)`
- Grid horizontal scroll em mobile; `6-up desktop → 4-up tablet`

**Card de Projeto / Inspiração (blog)**
- Background: `#FFFFFF`
- Radius: `16px`
- Shadow: igual ao card de departamento
- Imagem: full-bleed topo, `16:9` em desktop, `4:3` em mobile, radius top `16px`
- Conteúdo: tag de categoria (`button-sm` chip em Ype Gold Pale), título `heading-md`, excerpt `body-sm Text Mid`, link "Ler mais →" em Ype Gold
- Hover: imagem tem `scale(1.04)` suave com overflow hidden no container

**Feature Band de Departamento**
- Seção full-width com `Forest Deep (#162019)` de fundo
- Layout assimétrico: 55% conteúdo texto / 45% fotografia do departamento
- Headline: `display-dept` DM Serif Display branco
- Descrição: `body-lg Text White Soft`
- CTAs: White-on-Dark (primário) + Outlined-on-Dark (secundário) em linha
- Fotografia: full-bleed com scrim gradient `Forest Mid` em 40% na borda esquerda para garantir legibilidade do texto
- Em mobile: empilha (foto topo, conteúdo abaixo)

**Card de Loja**
- Background: `#FFFFFF`
- Radius: `16px`
- Border: `2px solid #C8860A` (Ype Gold) — identifica a unidade ativamente
- Shadow: `0 2px 8px rgba(0,0,0,0.10)`
- Header: `80px` com background em lavagem Ype Gold Pale (`#FBF3DD`), nome da loja em `heading-lg Forest Deep`, ícone MapPin em Ype Gold
- Barra de acento inferior: `4px solid gradient de Ype Gold → Ype Gold Light`
- Mapa embed: `240px` de altura, iframe Google Maps full-width, sem borda
- Body: endereço `body-sm`, horários em chips `badge-open`, dois CTAs (Ligar ghost + Como Chegar Forest Filled)

**Card de Especialista / Consultor**
- Background: `#FFFFFF`
- Radius: `16px`
- Shadow: card padrão
- Foto: circular `80px`, border `2px solid Ype Gold`
- Nome: `heading-md Forest Deep`, especialidade: `body-sm Steel`
- Departamento tag: `button-sm` chip Soft Category
- CTA: "Agendar consulta" Primary Outlined Gold full-width

**Mega-Menu (navegação de categorias)**
- Background: `#FFFFFF`
- Radius: `0 0 16px 16px` (arredonda apenas a base, pois o topo adere à navbar)
- Shadow: `0 8px 24px rgba(0,0,0,0.12)`
- Layout: 4–5 colunas com título de categoria em `heading-sm Forest Deep`, links em `body-sm Text Mid`, "VER TODOS" em `button-sm Ype Gold`
- Abertura: `opacity 0 → 1` + `translateY(-8px → 0)` em `0.2s ease-out`
- Fundo do overlay: `rgba(22,32,25,0.30)` sobre o conteúdo da página ao abrir

### Inputs & Formulários

**Campo de Texto com Label Flutuante**
- Background: `#FFFFFF`
- Border: `1.5px solid #D9D4CB` (Hairline)
- Radius: `12px`
- Padding: `14px 16px`
- Label: flutua sobre o border em `12px/700` quando ativo; `16px/400 Text Muted` em repouso
- Focus: border `1.5px solid #C8860A`
- Valid: border `#1E6B3C` + fundo `Success Soft`
- Invalid: border `#C53030` + fundo `Error Tint`
- Transição de label: `0.22s cubic-bezier(0.25, 1.50, 0.65, 1.0)` (spring suave)

**Campo de Busca — navbar**
- Background: `#F8F4ED` (Parchment) na versão expandida
- Border: `1px solid #D9D4CB`
- Radius: `32px`
- Altura: `40px`, Padding: `0 16px`
- Ícone de lupa em `Steel`, muda para Ype Gold ao focar
- Expansão: `0 → 280px` com opacity, ao clicar no ícone de busca

### Navegação

**Topbar**
- Background: `Forest Deep (#162019)`
- Texto: `rgba(255,255,255,0.65)` (`Text White Soft`)
- Altura: `40px`
- Links: `label-utility` (11px/700/uppercase), hover para `#FFFFFF`
- Esquerda: "Portal do Fornecedor · Trabalhe Conosco · Sustentabilidade · Ouvidoria" (visibilidade progressiva por breakpoint)
- Direita: telefone com ícone Phone em Ype Gold + horário de funcionamento

**Navbar Principal — com encolhimento ao scroll**
- Background: `#FFFFFF`
- Border-bottom: `1px solid #EDE9E0` (Hairline Soft) em repouso
- Shadow após scroll: `0 1px 4px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)` (dois layers, baixo alpha)
- Altura default: `88px` → scrolled `64px` (transição `300ms ease-out`)
- Logo: altura `48px` default → `36px` scrolled
- Links desktop: `heading-sm Forest Deep`, hover underline `2px Ype Gold` bottom
- Link ativo: `Ype Gold`, underline `2px Ype Gold` persistente
- "Categorias" trigger: chevron animado, abre mega-menu
- Direita: busca + botão "Fale com Especialista" (Forest Filled)

**Drawer Mobile**
- Largura: `300px`
- Background: `#FFFFFF`
- Shadow: `0 24px 48px rgba(0,0,0,0.24)`
- Header: logo + botão X
- Busca full-width no topo do drawer
- Links com ícone Lucide à esquerda, `body-md Forest Deep`, hover `bg-Parchment text-Ype-Gold`
- Grupos colapsáveis por categoria (accordion com transição `280ms ease-out`)
- Footer do drawer: contato e horário em mini-bloco Forest Soft

### Seções Especiais

**Hero Principal**
- Background: `Parchment (#F8F4ED)`
- Layout: 55% conteúdo / 45% fotografia editorial de projeto concluído
- Eyebrow: chip `label-utility uppercase` em Ype Gold sobre fundo Ype Gold Pale, ex: "+ de 15.000 itens em estoque"
- Headline: `display-hero` em DM Serif Display, `Forest Deep`, até 3 linhas
- Subtítulo: `body-lg Text Mid`
- CTA row: Forest Filled (primário) + Ghost Utility (secundário) em linha
- Trust strip: 3–4 pilares em ícone + label (`label-utility uppercase Steel`): "Entrega MS · Especialistas · + de 20 anos · Marcas líderes"
- Imagem: fotografia editorial de ambiente (sala reformada, cozinha, jardim profissional) sem shape clip — retangular full-bleed no lado direito

**Seção de Expertise / Por Que o Ype**
- Feature band `Forest Deep`
- Headline: `heading-xl White` (DM Sans, não DM Serif)
- Grid 3–4 colunas de "pilares": ícone outline `64px` em Ype Gold, título `heading-md White`, descrição `body-sm Text White Soft`
- Ex: "Equipe Técnica Especializada · Portfólio de Marcas Líderes · Atendimento por Projeto · Entrega em todo o MS"
- CTA única: White-on-Dark

**Seção de Departamentos**
- Background: Parchment
- Headline de seção: `heading-xl Text Deep`
- Grid de cards de departamento (4-up → 2-up)
- Categorias inspiradas em sertao.com.br: Construção & Acabamento · Hidráulica · Elétrica · Pisos & Revestimentos · Portas & Janelas · Ferramentas · Iluminação · Jardinagem · Climatização · Tintas · Cozinha & Lavanderia · Utilidades
- CTA de seção: "Ver todos os departamentos" Ghost Utility centralizado ao final

**Seção de Marcas Parceiras**
- Background: `#FFFFFF`
- Headline: `heading-xl Text Deep`
- Carousel horizontal: logos em escala de cinza (`grayscale(1)` → `grayscale(0) scale(1.05)` no hover)
- Fundo: `Concrete Light (#F1F3F5)` por trás de cada logo tile, radius `8px`
- Ex: Stihl · Tigre · Lorenzetti · Tramontina · Gerdau · Votorantim · Weg · Bosch

**Seção de Inspirações / Blog**
- Background: Parchment
- Grid editorial: 1 card grande (3/5) + 2 cards menores (1/5 cada) — quebra no mobile para coluna única
- Tag de categoria no card: chip Soft Category (ex: "Reforma", "Jardim", "Elétrica Residencial")
- "Ver mais inspirações" Ghost Utility ao final

**Seção de Lojas**
- Background: `#FFFFFF`
- Grid 1-up → 2-up para cards de loja
- Header de seção com botão "Abrir no Maps" em Forest Filled

**Footer**
- Background: `Forest Deep (#162019)`
- Border-top: `4px solid Ype Gold`
- Grid: `12 colunas` — Brand (4) + Categorias (3) + Institucional (2) + Contato (3)
- Headings de coluna: `label-utility White` (uppercase)
- Links: `body-sm Text White Soft`, hover `Text White`
- Social icons: quadrados `36px radius-8px` — Facebook `#1877F2`, Instagram gradient, WhatsApp `Success`
- Bottom bar: `border-top Hairline 10% white opacity`, copyright + CNPJ em `caption Text White Muted`

---

## 5. Princípios de Layout

### Sistema de Espaçamento

| Token | Pixels | Uso típico |
|---|---|---|
| `space-1` | 4px | Espaçamento mínimo inline |
| `space-2` | 8px | Gap interno de chip/badge |
| `space-3` | 16px | Padding de card, gutter mobile |
| `space-4` | 24px | Padding interno generoso de card, gutter tablet |
| `space-5` | 32px | Gap entre subseções |
| `space-6` | 40px | Gutter desktop, padding de feature band |
| `space-7` | 48px | Padding vertical de seções internas |
| `space-8` | 64px | Espaçamento entre seções principais (`py-16`) |
| `space-9` | 96px | Breathing das hero bands |

**Gutter:** `16px` mobile → `24px` tablet → `40px` desktop.

### Grid & Container

- **Max-width:** `1360px` com gutters crescentes
- **Departamentos:** `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`
- **Marcas:** carousel horizontal, `6-up lg` → `4-up md` → scroll mobile
- **Blog:** grid assimétrico 3/5 + 1/5 + 1/5 em desktop
- **Lojas:** `grid-cols-1 lg:grid-cols-2`
- **Hero:** split 55/45 em lg; coluna única em mobile (imagem abaixo do conteúdo)

### Filosofia de Whitespace

Seções alternam entre `Parchment` e `Canvas White` para criar separação sem bordas ou sombras de seção. A `border-top 4px Ype Gold` no footer e a `border-bottom 1px hairline-soft` da navbar são os únicos divisores "físicos" do layout — todos os outros são transições de cor de fundo.

---

## 6. Elevação & Profundidade

| Nível | Tratamento | Uso |
|---|---|---|
| 0 — Flat | sem shadow, sem border | Topbar, feature bands, newsletter, footer |
| 1 — Hairline | `1px solid Hairline` | Bordas de input default, separadores de footer |
| 2 — Lift | `0 1px 2px rgba(0,0,0,.08), 0 2px 6px rgba(0,0,0,.10)` | Cards de departamento, marca e blog em default |
| 3 — Float | `0 4px 16px rgba(0,0,0,.14)` | Cards no hover — substituem o Lift |
| 4 — Navbar | `0 1px 4px rgba(0,0,0,.08), 0 2px 8px rgba(0,0,0,.06)` | Navbar após scroll |
| 5 — FAB | `0 6px 16px rgba(37,211,102,.40)` | WhatsApp FAB — sombra colorida exclusiva |
| 6 — Mega-menu | `0 8px 24px rgba(0,0,0,.12)` | Dropdown de categorias |

Não há `drop-shadow` de card no chrome navegacional. A única sombra colorida do sistema é a do FAB WhatsApp.

---

## 7. Do's and Don'ts

### ✅ Do
- Use `display-hero` (DM Serif Display) exclusivamente no headline do hero principal e em feature bands de departamento. Em todos os outros contextos, DM Sans.
- Use `Forest Filled` como CTA principal em superfícies Parchment, e `White-on-Dark` dentro de feature bands Forest Deep. Nunca inverta.
- Mantenha o radius `32px` em todos os botões — pill moderado, sem exceção.
- Alterne `Parchment (#F8F4ED)` e `Canvas White (#FFFFFF)` entre seções consecutivas para criar ritmo sem bordas.
- Use `Ype Gold (#C8860A)` somente em: CTAs primários, active nav indicator, ícones de ação, e o border-top de 4px do footer. Nunca como fundo de seção ampla.
- Reserve DM Mono para fichas técnicas e especificações numéricas — máximo 2 ocorrências por página.
- Mantenha as logos de marcas parceiras em `grayscale(1)` no estado default — a cor retorna apenas no hover.
- A sombra colorida (`rgba(200,134,10,0.28)`) é exclusiva de `button-primary` — botões ghost e soft usam shadows neutras.

### ❌ Don't
- Não use gradiente como fundo decorativo de seção — o sistema é estritamente cor-bloco.
- Não aplique DM Serif Display em cards, mega-menu, formulários ou footer — ela é exclusiva de momentos editoriais.
- Não use `Ype Gold` como fundo de seção ampla — em grandes áreas só `Forest Deep`, `Parchment` ou `Canvas White`.
- Não adicione badges de desconto, preços em promoção ou contadores de urgência — este não é um site de e-commerce.
- Não aplique glassmorphism ou backdrop-blur — o sistema é opaco e sólido.
- Não use mais de 2 CTAs em destaque no mesmo viewport — combine Forest Filled + Ghost Utility ou White-on-Dark + Outlined-on-Dark.
- Não coloque logos de marcas em fundo colorido — sempre `Canvas White` ou `Concrete Light`.
- Não use `forest-deep` como cor de texto em superfícies Parchment em letras menores que 14px — o contraste é adequado mas a temperatura pesada demais em corpo de texto. Use `Text Deep rgba(22,32,25,0.92)`.
- Não introduza uma quinta cor ao sistema além de Gold, Forest, Parchment, White e os semânticos — a força do sistema está na sua contenção.

---

## 8. Comportamento Responsivo

### Breakpoints

| Nome | Largura | Mudanças principais |
|---|---|---|
| mobile | < 480px | Navbar colapsada; hero coluna única; grid 2-col departamentos; topbar links reduzidos a 1 |
| mobile-lg | 480–767px | Grid 2-col; topbar mostra 2 links; card de loja full-width |
| tablet | 768–1023px | Mega-menu ativo; grid 3-col departamentos; hero mantém split 55/45 |
| desktop | 1024–1359px | Grid 4-col; blog grid assimétrico ativo; topbar 4 links |
| desktop-xl | 1360px+ | Max-width caps; gutters crescem; grid de marcas 6-up |

### Touch Targets

Botões com `padding: 12px 24px` medem aproximadamente `44px` de altura — mínimo WCAG AA para touch. FABs a `60px` (WhatsApp) e `48px` (back-to-top) estão bem acima do mínimo. Links do mega-menu e drawer mobile: `py-3` garante ~44px de área clicável.

### Estratégia de Colapso

- **Navbar:** `h-[88px] logo-h-[48px]` → scroll `h-[64px] logo-h-[36px]`. CTA "Fale com Especialista" mantido em ambos os estados em desktop; some em tablet (substituído pelo hamburger).
- **Topbar links:** "Portal do Fornecedor" sempre → "Trabalhe Conosco" em `sm:` → "Sustentabilidade" em `md:` → "Ouvidoria" em `lg:`.
- **Mega-menu:** ativo em `lg:`; substitutído por accordion no drawer mobile.
- **Hero split:** 55/45 em `lg:` → coluna única com imagem abaixo do conteúdo em `<lg`.
- **Grid departamentos:** `4-col lg` → `3-col md` → `2-col mobile`.
- **Seção de marcas:** grid 6-up em desktop → carousel scroll horizontal em mobile.
- **Feature bands:** layout split → empilhado em `<768px`; fotografia vai para o topo.
- **Blog grid assimétrico:** 3/5 + 1/5 + 1/5 → coluna única em mobile.

### Comportamento de Imagens

- Hero: fotografia editorial `object-cover` no container 45%, `aspect-ratio: 4/3` em desktop → descartada em mobile (conteúdo toma toda a largura).
- Cards de departamento: imagem ou ícone em container `160px` de altura fixo, `object-cover` ou centrado.
- Blog: proporção `16:9` em desktop preservada com `aspect-ratio`; `4:3` em mobile.
- Logos de marcas: `object-contain` em container de altura fixa — nunca distorcidas.
- Fade-in de imagens: `opacity 0.25s ease-in` na carga.

---

## 9. Guia de Prompts para Agentes

### Referência Rápida de Cores

- CTA primário em superfície clara: "Forest Deep (`#162019`) filled"
- CTA de destaque: "Ype Gold (`#C8860A`) filled"
- CTA em feature band escura: "White-on-Dark (`#FFFFFF` text `#162019`)"
- Headline em superfície clara: "DM Serif Display, Text Deep (`rgba(22,32,25,0.92)`)"
- Headline em feature band: "DM Serif Display ou DM Sans, `#FFFFFF`"
- Canvas de página: "Parchment (`#F8F4ED`)"
- Canvas de card: "White (`#FFFFFF`)"
- Texto secundário: "Text Mid (`rgba(22,32,25,0.60)`)"
- Texto em escuro: "Text White Soft (`rgba(255,255,255,0.70)`)"
- Footer / topbar / feature band: "Forest Deep (`#162019`)"
- Border-top footer: "Ype Gold (`#C8860A`) 4px"

### Exemplos de Prompts de Componente

1. **Hero principal:** "Crie a seção hero do Ype Home Center sobre fundo Parchment (`#F8F4ED`). Coluna esquerda (55%): chip eyebrow em Ype Gold Pale com texto '+ de 15.000 itens' em `label-utility uppercase Ype Gold`; headline em DM Serif Display 56px weight 300 cor Forest Deep; subtítulo em DM Sans 18px weight 400 Text Mid; CTA row com botão Forest Filled ('Visite nossa loja', `32px` radius, `12px 24px` padding, DM Sans 16px/600) e botão Ghost Utility ('Conheça os departamentos'). Trust strip com 4 pilares icon+label. Coluna direita (45%): fotografia editorial retangular full-bleed de projeto concluído."

2. **Feature band de expertise:** "Crie uma seção full-width com background Forest Deep (`#162019`). Headline DM Sans 32px/700 branco: 'Por que escolher o Ype?'. Grid 4 colunas: cada célula tem ícone outline 64px em Ype Gold, título DM Sans 20px/600 branco, descrição DM Sans 14px/400 `rgba(255,255,255,0.70)`. Exemplos: 'Equipe Técnica' / 'Marcas Líderes' / 'Entrega no MS' / 'Consultoria de Projeto'. CTA único White-on-Dark centralizado ao final."

3. **Card de departamento:** "Card com background `#FFFFFF`, radius `16px`, shadow `0 1px 2px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.10)`. Topo: área `160px` com background `#F1F3F5`, ícone SVG `48px` em `#C8860A` centralizado. Body padding `16px`: nome do departamento DM Sans 20px/600 Forest Deep, descrição 14px/400 Text Mid (2 linhas), link 'Ver tudo →' em Ype Gold 14px/600. Hover: shadow intensifica + translateY(-4px)."

4. **Mega-menu de categorias:** "Menu dropdown com background `#FFFFFF`, radius `0 0 16px 16px`, shadow `0 8px 24px rgba(0,0,0,0.12)`. 5 colunas. Cada coluna: cabeçalho em DM Sans 16px/600 Forest Deep; links em DM Sans 14px/400 Text Mid com hover text Ype Gold; 'VER TODOS' ao final em DM Sans 12px/600 uppercase Ype Gold com seta. Overlay de fundo `rgba(22,32,25,0.30)` sobre a página ao abrir. Animação: opacity 0→1 + translateY(-8px→0) em 200ms ease-out."

5. **Card de loja:** "Card `#FFFFFF`, radius `16px`, border `2px solid #C8860A`. Header 80px: fundo Ype Gold Pale, nome da loja DM Sans 24px/700 Forest Deep, ícone MapPin Ype Gold. Barra inferior: 4px gradient Ype Gold → Ype Gold Light. Mapa embed iframe `240px`. Body: endereço `body-sm`, chips de horário (Seg–Sex / Sáb / Dom) em Soft Category, dois botões: telefone Ghost + 'Como Chegar' Forest Filled."

6. **Footer:** "Background Forest Deep (`#162019`), border-top `4px solid #C8860A`. Grid 12 colunas: brand (4) com logo invertido, slogan em `label-utility Ype Gold`, descrição em `body-sm Text White Soft`, social icons `36px radius-8px`. Categorias (3), Institucional (2), Contato (3) com headings `label-utility uppercase White`. Links `body-sm Text White Soft` hover `Text White`. Bottom bar: `border-top 1px rgba(255,255,255,0.10)`, copyright em `caption Text White Muted`."

7. **Seção de marcas parceiras:** "Background `#FFFFFF`. Headline DM Sans 32px/700 Text Deep. Grid `6-up desktop → 4-up tablet → horizontal scroll mobile`. Cada tile: background `#F1F3F5`, radius `8px`, logo `object-contain` em container `120×80px`, logo em `grayscale(1)`. Hover: `grayscale(0) scale(1.04)` com transition `0.22s ease`."

8. **Blog / inspirações card:** "Card `#FFFFFF`, radius `16px`, shadow lift. Imagem `16:9` full-bleed topo com overflow hidden e radius top `16px`. Hover na imagem: `scale(1.04) transition 0.3s ease`. Body padding `16px`: chip de categoria Soft Category (ex: 'Reforma'), título DM Sans 20px/600 Forest Deep, excerpt 14px/400 Text Mid (3 linhas), link 'Ler mais →' Ype Gold 14px/600 com seta."

### Guia de Iteração

1. Referencie cores pelos nomes do sistema: "Ype Gold", "Forest Deep", "Parchment" — não por hexadecimal avulso.
2. Antes de adicionar DM Serif Display a qualquer componente, confirme: é um momento editorial (hero, feature band de departamento, título de artigo)? Se não, use DM Sans.
3. Antes de adicionar um badge de desconto ou urgência: este site não é e-commerce. Substitua por badge de destaque de portfólio ("+ de 500 opções", "Marca líder") ou de atributo técnico ("Exclusivo Ype").
4. Verifique o ritmo de seção: Parchment → White → Forest Deep band → Parchment. Nunca duas seções idênticas consecutivas.
5. O radius de botão é `32px` universal — não use `full-pill (9999px)` nem `8px` (muito quadrado para este sistema).
6. Para novos cards: sempre herde shadow Lift (`0 1px 2px / 0 2px 6px`) no default e Float (`0 4px 16px`) no hover.
7. Não crie novo token de cor para novos componentes — verifique primeiro se um dos existentes resolve. A contenção da paleta é uma decisão de marca.

---

## 10. Gaps Conhecidos

- **Página de Produto Individual:** o sistema documenta cards de departamento, mas não um PDP completo (galeria de fotos, especificações técnicas, ficha DM Mono, seção de perguntas frequentes). Escopo a definir.
- **Sistema de Busca expandido:** o campo de busca da navbar está especificado, mas a página de resultados de busca (SERP interna) não está documentada — grid de resultados, filtros de categoria, ordenação.
- **Tablóide digital:** "Ver tablóide" é um CTA recorrente, mas a seção ou modal de tablóide (PDF embed ou carrossel de ofertas) não está especificada. A sertao.com.br redireciona para `ofertas.sertao.com.br` como subdomínio separado.
- **Estados hover do mega-menu em touch (tablet):** o comportamento em dispositivos com toque mas tela larga (iPad landscape) não está documentado — abertura por tap vs hover.
- **Página de Blog/Artigo interior:** documentado apenas o card de listagem. A anatomia de um artigo completo (cabeçalho, TOC, imagens inline, CTA de contato ao final) não está especificada.
- **Dark mode:** o sistema não define variantes dark além dos elementos Forest Deep já existentes (topbar, footer, feature bands). Modo escuro completo está fora do escopo.
- **Formulário de Orçamento / Contato:** campos de texto com label flutuante estão especificados, mas o formulário de orçamento por projeto (seleção de departamento, tipo de obra, área em m², upload de planta) não foi detalhado.
- **Animações de página (page transitions):** apenas transições de componente estão documentadas. Transições entre páginas (SPA routing) não estão especificadas.
