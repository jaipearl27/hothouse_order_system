FROM node:22.14.0-alpine

WORKDIR /app

COPY ./package.json ./

RUN npm install -f

COPY . .

EXPOSE 3000

# CMD ["npm", "run", "build"]

CMD ["npm", "run", "dev"]


