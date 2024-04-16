FROM caddy:2.7.6-alpine

COPY *.html /usr/share/caddy/
COPY assets /usr/share/caddy/assets
COPY images /usr/share/caddy/images

WORKDIR /usr/share/caddy