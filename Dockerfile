FROM php:8.2-fpm

RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libzip-dev \
    zip \
    unzip

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd pdo pdo_mysql zip

# Set working directory
WORKDIR /application

# Copy the Laravel project files
#COPY /laravel .

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Laravel dependencies
#ENV COMPOSER_ALLOW_SUPERUSER=1

#RUN cd /laravel && composer install

#FROM node:14-alpine

#WORKDIR /application

#COPY /laravel .

#RUN npm install && npm run dev
