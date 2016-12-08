FROM node:4.4
RUN npm install -g npm angular-cli

RUN mkdir /web

COPY src web/src
COPY *.json web/
COPY e2e web/e2e

EXPOSE 4040

WORKDIR /web

RUN npm install

CMD ["npm", "run", "start"]