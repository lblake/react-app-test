FROM node:erbium as builder

WORKDIR /app

COPY package.json .
COPY package-lock.lock .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable

COPY --from=builder /app/build/ /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

WORKDIR /var/www

CMD ["/bin/bash", "-c", "nginx -g 'daemon off;'"]

