FROM node:14.1

COPY package*.json /app/
WORKDIR /app

RUN npm ci
CMD [ "npm", "start" ]
