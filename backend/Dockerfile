FROM php:8.5-cli

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    sqlite3 \
    libsqlite3-dev \
    libzip-dev \
    && docker-php-ext-install pdo pdo_sqlite zip

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY . .

RUN composer install --no-dev --optimize-autoloader

RUN mkdir -p database \
    && touch database/database.sqlite

RUN chmod -R 777 storage bootstrap/cache database

EXPOSE 10000

CMD php artisan migrate --force && \
    exec php artisan serve --host=0.0.0.0 --port=10000