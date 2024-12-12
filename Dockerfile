# Build stage 
FROM krmp-d2hub-idock.9rum.cc/goorm/node:20
WORKDIR /usr/src/app 
COPY krampoline/ ./
RUN npm install -g npm@10.9.2
RUN npm ci
RUN npm run build 
RUN npm install -g serve 
EXPOSE 3000 
CMD ["serve", "build"]