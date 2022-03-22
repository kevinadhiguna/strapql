FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
