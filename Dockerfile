FROM node:16

WORKDIR /front

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

ENV PORT=8080
EXPOSE 8080

RUN yarn build

CMD ["yarn", "start"]
