FROM node:18.6.0

WORKDIR /retmod

COPY . .

RUN yarn docker

EXPOSE 3000

CMD ["yarn", "start"]