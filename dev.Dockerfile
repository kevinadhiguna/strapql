FROM node:16-alpine

COPY package.json .
COPY yarn.lock .

RUN yarn --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
