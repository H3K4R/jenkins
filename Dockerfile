FROM node:lts-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install -g pm2
EXPOSE 3000
CMD [ "pm2-runtime", "start", "app.js" ]
