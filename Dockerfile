FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /usr/app

FROM base AS deps

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store pnpm install --frozen-lockfile

FROM base AS builder

COPY --from=deps --chown=nextjs:nodejs /usr/app/node_modules ./node_modules
COPY . .

RUN --mount=type=secret,id=NOCODB_API_URL,env=NOCODB_API_URL \
    --mount=type=secret,id=NOCODB_API_TOKEN,env=NOCODB_API_TOKEN \
    pnpm run build

FROM node:20-alpine AS runner

WORKDIR /usr/app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN mkdir .next
RUN chown nextjs:nodejs .next

USER nextjs

COPY --chown=nextjs:nodejs --from=builder /usr/app/node_modules ./node_modules
COPY --chown=nextjs:nodejs --from=builder /usr/app/.next/standalone ./
COPY --chown=nextjs:nodejs --from=builder /usr/app/.next/static ./.next/static
COPY --chown=nextjs:nodejs --from=builder /usr/app/public ./public

EXPOSE 3000

CMD [ "node", "server.js" ]