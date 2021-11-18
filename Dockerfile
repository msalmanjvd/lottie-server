FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install -g tsc \
    && npm install -g concurrently \
    && npm install -g typescript 

COPY . .

EXPOSE 6060
CMD [ "node", "build/server.js" ]