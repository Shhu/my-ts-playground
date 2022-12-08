## Playground

### Client stack
- Vue3
- typescript
- Tailwind

### Server stack
- Fastify
- Prisma
- typescript
- zod 
- tRPC

### Install
Fill the .env
```
cp .env.example .env
```
Use **pnpm** to install the workspace
```
pnpm i
```

### Available commands
```
# Start the client vite dev 
pnpm client:dev
# Start the node server (with nodemon)
pnpm server:dev 
# Prisma stuff
pnpm shared:prisma
pnpm shared:prisma-generate
pnpm shared:prisma-studio
pnpm shared:prisma-migrate
pnpm shared:prisma-reset
pnpm shared:prisma-push
# Start vitest with webstorm integration (.vitest-result.json)
pnpm webstorm-integration
```

### Test tRCP server
Check with prisma studio an userID
```
http://localhost:3022/trpc/getUserById?input="0160418c-83cd-411d-8bb9-068a123bab3b"
```
