FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY static/ static/
COPY blog blog/
COPY sidebars.js sidebars.js
COPY docusaurus.config.js docusaurus.config.js
COPY src/ src/
COPY blog/ blog/
COPY docs/ docs/

RUN yarn build
EXPOSE 3000

CMD [ "yarn", "start" ]
