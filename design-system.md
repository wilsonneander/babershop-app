# Design System - Barbershop App

Este documento serve como referência de **Design System** e **Guia de Estilos** para a criação de novas páginas e componentes na aplicação Barbershop. Ele foi extraído (usando o fluxo de autenticação como base) para manter a consistência visual em todo o projeto.

## 1. Cores (Colors)

A aplicação suporta *Dark Mode* (padrão) e *Light Mode*. As cores a seguir devem ser utilizadas via utilitários do Tailwind:

### Cores de Marca (Brand)
- **Primary Gradient**: `linear-gradient(90deg, #9C3FEF 0%, #C65647 100%)` - *Usado em botões principais de ação*.
- **Primary Accent / Brand**: `#A443C4` - *Usado em links, foco de inputs e checkboxes*.
- **Primary Shadow**: `#9C3FEF/20` - *Usado para sombra do botão principal*.

### Fundos (Backgrounds)
- **Background Padrão (Dark)**: `#0a0a0a`
- **Background Padrão (Light)**: `white` (`dark:bg-white`)
- **Background Input (Dark)**: `#1C1919`
- **Background Input (Light)**: `#F7FAFC` (`dark:bg-[#F7FAFC]`)

### Textos (Text)
- **Texto Principal (Dark)**: `text-white` ou `#FFFFFF`
- **Texto Principal (Light)**: `text-gray-900` (`dark:text-gray-900`)
- **Texto Secundário / Labels / Subtítulos**: `#718096`
- **Texto Input (Light)**: `#4A5568` (`dark:text-[#4A5568]`)
- **Texto Placeholder**: `text-gray-500`

---

## 2. Tipografia (Typography)

Sempre utilizar as fontes e tamanhos mapeados abaixo para garantir hierarquia visual consistente.

### Font Families
- **Logo / Marca**: `'Instrument Serif', serif`
- **Títulos (Headings)**: `'Instrument Sans', sans-serif`
- **Corpo / UI (Body)**: Default sans-serif (`font-sans` do Tailwind)

### Escala de Tamanhos de Texto
- **Logo**: `24px` (`text-[24px]`)
- **Título de Página (H1)**: `32px` (`text-[32px]`), Peso: `font-bold`
- **Corpo / Subtítulos / Links**: `14px` (`text-[14px]`)
- **Labels de Input**: `text-sm` (14px), Peso: `font-medium`

---

## 3. Espaçamentos e Forma (Spacing & Shape)

Utilize estes valores constantes para criar o layout da página:

### Alturas (Heights)
- **Inputs**: `h-[48px]`
- **Botões Principais**: `h-[52px]`

### Bordas (Border Radius)
- **Inputs**: `12px` (`rounded-[12px]`)
- **Botões**: `16px` (`rounded-[16px]`)

### Margens e Paddings Comuns (Gaps & Margins)
- **Padding horizontal da tela flex**: `px-[24px]` (Mobile) a `px-[48px]` (Desktop/MD)
- **Gaps verticais em formulários**: `gap-2` (entre label e input), `gap-[16px]` (entre diferentes inputs)
- **Margens abaixo de títulos**: `mb-[8px]` (abaixo de H1), `mb-[32px]` (abaixo de logo ou subtítulo)
- **Padding interno de inputs**: `px-[16px]`

---

## 4. Componentes Base (Snippets)

Use as classes abaixo replicar o comportamento visual exato em novas interfaces.

### 4.1. Layout Base (Página Fixa / Split Screen)
```tsx
<div className="flex min-h-screen w-full bg-[#0a0a0a] text-white dark:bg-white dark:text-gray-900 font-sans">
  <div className="w-full max-w-[480px] flex flex-col px-[24px] md:px-[48px] py-8 mx-auto justify-center">
    {/* Conteúdo da página aqui */}
  </div>
</div>
```

### 4.2. Títulos e Subtítulos
```tsx
{/* Logo */}
<div className="mb-[32px] text-[24px]" style={{ fontFamily: "'Instrument Serif', serif" }}>
  Barber&Shop
</div>

{/* H1 */}
<h1 className="mb-[8px] text-[32px] font-bold" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
  Título da Página
</h1>

{/* Texto com Link inline */}
<div className="mb-[32px] text-[14px] text-[#718096]">
  Texto descritivo{' '}
  <Link href="#" className="text-[#A443C4] hover:underline">
    Link de ação
  </Link>
</div>
```

### 4.3. Input Field (com Label)
```tsx
<div className="flex flex-col gap-2">
  <label className="text-sm text-[#718096] font-medium">Nome do Campo</label>
  <input
    type="text"
    placeholder="Seu texto aqui"
    className="h-[48px] px-[16px] rounded-[12px] bg-[#1C1919] text-[#FFFFFF] dark:bg-[#F7FAFC] dark:text-[#4A5568] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A443C4]/50 transition-all border-none w-full"
  />
</div>
```

### 4.4. Botão Principal (Gradient)
```tsx
<button
  type="submit"
  className="w-full h-[52px] rounded-[16px] text-white font-medium flex items-center justify-center transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.95] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#9C3FEF]/20"
  style={{ background: 'linear-gradient(90deg, #9C3FEF 0%, #C65647 100%)' }}
>
  Ação Principal
</button>
```

### 4.5. Checkbox (Lembrar-me)
```tsx
<label className="flex items-center gap-2 cursor-pointer group">
  <input 
    type="checkbox" 
    className="accent-[#A443C4] w-4 h-4 cursor-pointer rounded border-gray-600 bg-transparent transition-colors"
  />
  <span className="text-[14px] text-[#718096] group-hover:text-gray-300 dark:group-hover:text-gray-600 transition-colors">
    Texto do Checkbox
  </span>
</label>
```

---

## Dicas na criação de páginas
- O design favorece cantos bem arredondados (`rounded-[12px]` e `rounded-[16px]`).
- Os campos possuem altura fixa de `48px` para toque confortável em mobile.
- Use sempre micro-interações: `transition-all`, `hover:scale-[1.02]`, e `hover:underline`.
- Assegure a acessibilidade cuidando dos contrastes, ativando `focus:ring-2 focus:ring-[#A443C4]/50` nos elementos interativos de formulário.
