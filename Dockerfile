FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build --force

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/app-angular-material /usr/share/nginx/html




