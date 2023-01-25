FROM httpd:latest as build

COPY . /usr/local/apache2/htdocs/