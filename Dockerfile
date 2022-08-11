FROM node:18.6.0

WORKDIR /retmod

COPY . .

RUN pnpm docker

EXPOSE 3000

CMD ["pnpm", "start"]