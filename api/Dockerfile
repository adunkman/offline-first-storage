FROM node:14.1
WORKDIR /api
ENV PATH="/api/node_modules/.bin:${PATH}"

COPY package*.json ./
RUN npm ci

CMD [ "npm", "start" ]
