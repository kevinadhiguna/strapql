FROM node:16-alpine as builder
WORKDIR /builder-app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:16-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile
COPY . .
COPY --from=builder /builder-app /app
EXPOSE 3000
CMD [ "yarn", "start" ]
