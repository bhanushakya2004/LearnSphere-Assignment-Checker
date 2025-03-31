# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the entire project to the container
COPY . .

# Expose the port Cloud Run will use
EXPOSE 8080

# Set environment variables for Cloud Run
ENV PORT=8080

# Command to run the application
CMD ["node", "server.js"]
