#Base image-- Check from docker hub
FROM node:18.14.2

#Set the working directory where the application is present inside your container
WORDIR /app

#Copy package.json and package-lock.json to container
COPY package*.json ./app

#Install dependencies
RUN npm Install

