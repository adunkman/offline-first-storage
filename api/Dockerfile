FROM node:14.1

COPY package*.json /api/
WORKDIR /api

RUN npm ci
CMD [ "npm", "start" ]
