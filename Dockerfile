FROM node:boron

RUN mkdir -p /source/
WORKDIR /source/

COPY package.json /source/

RUN yarn gloabl add \
    nodemon \
    babel-cli \
    yarn

RUN yarn

COPY . /source/

EXPOSE 8080

ENV NODE_ENV production

CMD [ "npm", "start" ]
