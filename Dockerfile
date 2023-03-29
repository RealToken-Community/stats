# syntax=docker/dockerfile:1
FROM caddy:2.6.4-alpine

RUN --mount=type=secret,id=api_key,dst=/usr/share/caddy/api.txt

COPY . /usr/share/caddy/

WORKDIR /usr/share/caddy

RUN sed -i -r "s/secret.API_KEY/$(sed 's:/:\/:g' api.txt)/" /usr/share/caddy/assets/js/main.js