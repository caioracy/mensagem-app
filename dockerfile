FROM node:alpine
COPY src /var/www/api/src
COPY nest-cli.json /var/www/api/nest-cli.json
COPY package-lock.json /var/www/api/package-lock.json
COPY package.json /var/www/api/package.json
COPY tsconfig.json /var/www/api/tsconfig.json
COPY tsconfig.build.json /var/www/api/tsconfig.build.json
RUN cd /var/www/api && npm i
WORKDIR /var/www/api
ENTRYPOINT [ "npm", "run", "start" ]