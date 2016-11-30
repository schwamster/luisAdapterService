FROM node:4.6

RUN apt-get update && npm install -g typescript nodemon typings

RUN mkdir app
WORKDIR /app
COPY package.json /app

COPY . /app

EXPOSE 3000

CMD ["node", "./server.js"]