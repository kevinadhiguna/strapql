FROM node:16-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn --frozen-lockfile

COPY babel.config.js babel.config.js
COPY template.md template.md
COPY static/ static/
COPY .dockerignore .dockerignore
COPY docusaurus/ docusaurus/
COPY docusaurus.config.js docusaurus.config.js
COPY sidebars.js sidebars.js
COPY blog/ blog/
COPY src/css/ src/css/
COPY src/pages/ src/pages/

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]
