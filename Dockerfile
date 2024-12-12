# Build stage 
FROM krmp-d2hub-idock.9rum.cc/goorm/node:20
WORKDIR /usr/src/app 
COPY krampoline/ ./
RUN npm install -g npm@10.9.2
RUN npm ci
RUN npm run build 
EXPOSE 3000 
CMD ["npm", "start"]