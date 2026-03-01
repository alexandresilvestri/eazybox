# EazyBox

**This is a Check-in App for Crossfit Gyms**

## Stack

- Nextjs (Framework)
- Typescript (Language)
- React (Client Side Library)
- Tailwind (Style)
- PostgresSQL (SGBD)
- Capacitor (Run the App on native mobile experience)

## Host (Cloud / Serverless)

- Vercel (Web App)
- Neon (Database)

## Init folder structure

```
/
├── capacitor.config.ts         # Capacitor configuration for iOS/Android
├── knexfile.ts                 # Knex configuration for Neon DB
├── package.json                # Bun dependencies and scripts
├── tsconfig.json
├── db/                         # Database layer (Kept outside src for clarity)
│   ├── migrations/             # Knex migration files
│   └── seeds/                  # Knex seed files (e.g., initial plans, dummy gyms)
├── public/                     # Static assets (images, icons, PWA manifests)
└── src/
    ├── app/                    # Next.js App Router
    │   ├── (marketing)/        # Route Group: Marketing Site (no layout shared with app)
    │   │   ├── page.tsx        # Landing page
    │   │   ├── pricing/        # Pricing page
    │   │   └── layout.tsx      # Marketing navbar/footer
    │   ├── (auth)/             # Route Group: Authentication
    │   │   ├── login/
    │   │   └── register/
    │   ├── (dashboard)/        # Route Group: Web App for Admins & Coaches
    │   │   └── [tenantId]/     # Multi-tenant routing (e.g., /dashboard/crossfit-poa/...)
    │   │       ├── schedule/
    │   │       ├── members/
    │   │       └── layout.tsx  # Sidebar/Navbar for the gym dashboard
    │   └── (mobile)/           # Route Group: Capacitor App for Gym Members
    │       ├── check-in/       # Mobile-optimized check-in screen
    │       ├── wods/           # Mobile view of daily workouts
    │       └── layout.tsx      # Bottom tab navigation for mobile users
    ├── components/             # Dumb/Shared UI Components (Buttons, Modals, Cards)
    │   ├── ui/                 # Base UI elements (e.g., shadcn/ui components)
    │   └── layouts/            # Reusable layout wrappers
    ├── features/               # Domain-Driven Logic (The core of your SaaS)
    │   ├── tenants/            # Gym management, branding, tenant isolation logic
    │   ├── users/              # Roles (Admin, Coach, Member), profiles, permissions
    │   ├── classes/            # Scheduling, capacity limits, check-in mutations
    │   ├── wods/               # Workout definitions, exercise logging
    │   ├── plans/              # Subscription plans, payment gateway integration hooks
    │   └── notifications/      # Future: Push notification payload builders
    ├── lib/                    # Core Utilities and Configs
    │   ├── db.ts               # Knex initialization and Neon connection instance
    │   ├── payments.ts         # Payment gateway client (e.g., Stripe or Mercado Pago)
    │   ├── capacitor.ts        # Capacitor device detection (isWeb vs isNative)
    │   └── utils.ts            # General helpers (date formatting, classNames)
    └── types/                  # Global TypeScript Definitions
        ├── database.d.ts       # Types reflecting your Neon DB schema
        └── index.d.ts
```

### Getting started

Clone the project:
- Git: git clone https://github.com/alexandresilvestri/eazybox
- Github CLI: gh repo clone alexandresilvestr/eazybox

This project use runtime Bun:
- run: docker compose up

Acess https://localhost:3000

To connect on the local database with postgres tool, use:
- host: localhost
- port: 5432
- database: neondb
- user: neon
- passwd: npg
