# FROM node:12-alpine
# WORKDIR /backend
# COPY . .
# RUN yarn install --production
# CMD ["node", "app.js"]




FROM node:14

WORKDIR /usr/src/app

COPY ./backend/package*.json ./

RUN npm install
COPY ./backend .

EXPOSE 3000
CMD [ "node", "app.js" ]
