FROM node:16

WORKDIR /server

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

ENV PORT=8080
EXPOSE 8080

CMD ["yarn", "start"]
