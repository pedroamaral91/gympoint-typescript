FROM node:12.7.0-alpine
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn
EXPOSE 3000