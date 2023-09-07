## Getting Started

This was bootstrapped with Next js and Prisma.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. (since we're using this port in docker-compose.yaml)

### Where to go from here.

- Spin up a command prompt and run

```zsh
  npx migrate dev --name init
  npx prisma db seed
  npx prisma studio

```

This generates a clean database GUI with a few data inside it.
