FROM node
WORKDIR /app
COPY . /app
RUN npm install && npm rebuild node-sass
EXPOSE 3000
CMD ["npm","start"]
