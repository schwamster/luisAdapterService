FROM node:4.6

RUN apt-get update && npm install -g typescript nodemon typings

RUN mkdir app
WORKDIR /app
COPY package.json /app

RUN npm install

COPY . /app

RUN typings install && tsc

EXPOSE 3000

CMD ["node", "./server.js"]