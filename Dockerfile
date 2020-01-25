FROM node:12.7.0-alpine
WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
RUN yarn
CMD ["yarn", "dev"]
EXPOSE 3000