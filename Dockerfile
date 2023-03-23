FROM node

WORKDIR /usr/src/app

COPY package*.json .

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]