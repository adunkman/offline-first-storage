FROM node:14.1
WORKDIR /app

COPY package*.json ./
RUN npm ci

CMD [ "npm", "start" ]
