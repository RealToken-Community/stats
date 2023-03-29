FROM caddy:2.6.4-alpine

ARG APIKEY=api_key
ENV APIKEY $APIKEY


COPY . /usr/share/caddy/

RUN sed -i -r "s/secret.API_KEY/${APIKEY}/g" /usr/share/caddy/assets/js/main.js