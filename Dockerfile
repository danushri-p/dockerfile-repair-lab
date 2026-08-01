# Use a valid lightweight Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy dependency files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source
COPY . .

# Expose the application port
EXPOSE 8080

# Start the application
CMD ["npm", "start"]