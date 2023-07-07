FROM node:18.16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
RUN node -v
CMD [ "node", "app.js" ]