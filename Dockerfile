FROM node:notfound
ENV NODE_ENV=development
WORKDIR /wrong
COPY package*.json ./
RUN npm install package-lock.json
COPY . .
EXPOSE 8080
CMD ["npm", "run", "production"]
