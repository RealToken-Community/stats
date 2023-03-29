FROM caddy:2.6.4-alpine

ARG APIKEY=api_key
ENV APIKEY $APIKEY


COPY ./assets/js/main.js /tmp/

RUN sed -i -e "s/secret.API_KEY/${APIKEY}/g" ./assets/js/main.js

#COPY /tmp/main.js ./assets/js/main.js

#COPY . /etc/caddy/  Config directory
COPY . /usr/share/caddy/

