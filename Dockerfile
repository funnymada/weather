# Use an official Node runtime as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install Quasar CLI globally
RUN npm install -g @quasar/cli

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that Quasar dev server runs on (default is 8080)
EXPOSE 8080

# Command to run the Quasar dev server
CMD ["quasar", "dev"]
