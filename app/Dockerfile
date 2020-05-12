FROM node:14.1
WORKDIR /app
ENV PATH="/app/node_modules/.bin:${PATH}"

COPY package*.json ./
RUN npm ci

CMD [ "npm", "start" ]
