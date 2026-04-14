# RazorLine | Barbershop Scheduling System

O RazorLine é p uma plataforma profissional de agendamento para barbearias, focada em uma experiência premium para o cliente e gestão eficiente para o barbeiro.

## 🚀 Tecnologias

### Front-end
- **Next.js (App Router)**: Framework React para performance e SEO otimizados.
- **Tailwind CSS**: Estilização moderna com design system baseado em Glassmorphism.
- **Lucide React**: Biblioteca de ícones elegantes.
- **React Hook Form & Zod**: Gerenciamento de formulários e validação robusta de tipos.

### Back-end
- **Supabase**: Backend-as-a-Service para Banco de Dados SQL, Autenticação e Storage.
- **Next.js Server Actions**: Lógica de servidor segura e otimizada sem necessidade de APIs REST tradicionais.
- **TypeScript**: Segurança de tipos em toda a aplicação.

---

## 🏛️ Arquitetura de Desenvolvimento

O projeto utiliza um padrão **Module-Based**, organizando a lógica por domínio em vez de apenas por tipo técnico:

```text
/src
  /app            # Roteamento e UI das páginas
  /modules        # Núcleo da aplicação (Regras de Negócio)
    /auth         # Gestão de usuários e perfis
    /barbers      # Gestão de profissionais
    /appointments # Lógica de agendamento e disponibilidade
  /lib            # Configurações globais (Supabase Client)
  /hooks          # Hooks customizados e lógicas reutilizáveis
```

Este padrão permite que o sistema seja escalável, onde cada módulo contém seus próprios **Actions**, **Services** e **Components**.

---

## 🗄️ Configuração do Banco de Dados (Supabase)

Para inicializar o banco de dados, execute os seguintes comandos SQL no Editor de SQL do seu painel Supabase:

```sql
-- 1. Tabela de Perfis (Extensão do Auth)
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null,
  email text unique not null,
  phone text,
  role text check (role in ('client', 'admin')) default 'client',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Tabela de Barbeiros
create table barbers (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Tabela de Disponibilidade
create table availability (
  id uuid default gen_random_uuid() primary key,
  barber_id uuid references barbers(id) on delete cascade,
  day_of_week integer check (day_of_week between 0 and 6),
  start_time time not null,
  end_time time not null
);

-- 4. Tabela de Agendamentos
create table appointments (
  id uuid default gen_random_uuid() primary key,
  client_id uuid references profiles(id) on delete cascade,
  barber_id uuid references barbers(id) on delete cascade,
  date date not null,
  time time not null,
  status text check (status in ('scheduled', 'cancelled', 'completed')) default 'scheduled',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

---

## 🔑 Credenciais de Acesso (Ambiente de Teste)

Para testar as funcionalidades administrativas, utilize os seguintes dados após rodar a aplicação:

- **Login**: `admin@gmail.com`
- **Senha**: `Teste123!`

> [!IMPORTANT]
> Certifique-se de configurar as variáveis de ambiente baseadas no arquivo `.env.example` antes de iniciar o servidor.

---

## 🛠️ Comandos

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

© 2026 Wilson Neander. Desenvolvido para máxima performance e elegância.
