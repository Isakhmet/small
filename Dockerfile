FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
        libzip-dev \
        zip \
        libpq-dev \
        && docker-php-ext-install zip \
        && docker-php-ext-install exif \
        && docker-php-ext-install pdo pdo_pgsql pgsql

WORKDIR /application

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Laravel dependencies
#ENV COMPOSER_ALLOW_SUPERUSER=1

#RUN cd /laravel && composer install

#FROM node:14-alpine

#WORKDIR /application

#COPY /laravel .

#RUN npm install && npm run dev
