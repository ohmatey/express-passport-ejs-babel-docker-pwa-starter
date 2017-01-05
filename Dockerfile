FROM node:boron

RUN mkdir -p /source/
WORKDIR /source/

COPY package.json /source/
RUN npm install
RUN npm install --silent -g \
    nodemon \
    babel-cli

COPY . /source/

EXPOSE 8080

CMD [ "npm", "start" ]
