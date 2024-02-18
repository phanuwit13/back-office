FROM node:18-alpine 

WORKDIR /app
COPY package*.json ./

RUN npm install -g json-server

COPY server/db.json .

EXPOSE 8081

CMD ["json-server", "--watch", "db.json", "--port", "8081", "--host", "0.0.0.0"]