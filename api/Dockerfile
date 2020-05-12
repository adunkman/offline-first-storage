FROM node:14.1
WORKDIR /api

COPY package*.json ./
RUN npm ci

CMD [ "npm", "start" ]
