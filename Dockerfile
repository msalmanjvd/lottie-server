FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install

# compile all typescript files
RUN  tsc

COPY . .

EXPOSE 6060
CMD [ "node", "build/server.js" ]