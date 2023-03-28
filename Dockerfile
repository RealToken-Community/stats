FROM caddy:2.6.4-alpine

ARG APIKEY = ${{ secrets.API_KEY }}
ENV APIKEY $APIKEY

RUN sed -i -e 's/secret.API_KEY/asd/g' ./assets/js/main.js

#COPY . /etc/caddy/  Config directory
COPY . /usr/share/caddy/