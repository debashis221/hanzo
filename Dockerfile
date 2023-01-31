FROM node:18-alpine as builder
WORKDIR /hanzo

COPY yarn.lock .
COPY package.json .
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:18-alpine as runner
WORKDIR /hanzo
COPY --from=builder /hanzo/package.json .
COPY --from=builder /hanzo/yarn.lock .
COPY --from=builder /hanzo/next.config.js .
COPY --from=builder /hanzo/public ./public
COPY --from=builder /hanzo/.next/standalone ./
COPY --from=builder /hanzo/.next/static ./.next/static

EXPOSE 3000

ENTRYPOINT [ "node","server.js" ]