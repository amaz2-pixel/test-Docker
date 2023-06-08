# Use a Node.js base image
FROM node:14-alpine

# Set the working directory
WORKDIR /findMax

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Set the command to run the application
CMD ["npm", "start"]