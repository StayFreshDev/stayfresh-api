FROM node:18.16
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install --save
EXPOSE 8080
RUN node -v
CMD [ "npm", "start" ]