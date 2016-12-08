FROM node
RUN npm install -g npm

RUN mkdir /client

COPY src client/src
COPY *.json web/
COPY e2e client/e2e

EXPOSE 3000 3001

WORKDIR /web
CMD ["npm", "run", "deploy", "--unsafe-perm"]