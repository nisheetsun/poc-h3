# FROM node:12-alpine
# WORKDIR /backend
# COPY . .
# RUN yarn install --production
# CMD ["node", "app.js"]




FROM node:14

WORKDIR /usr/src/app

COPY ./backend/package*.json ./

RUN npm install
RUN npm install -g nodemon
RUN apt-get update
RUN apt-get install lsof
# COPY ./backend .

EXPOSE 3000
CMD [ "nodemon", "app.js" ]
