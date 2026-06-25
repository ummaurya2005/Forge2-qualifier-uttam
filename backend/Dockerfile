# PHP 8.5
FROM php:8.5-cli

# Install system packages
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    curl \
    sqlite3 \
    libsqlite3-dev \
    libzip-dev \
    && docker-php-ext-install pdo pdo_sqlite zip

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Working directory
WORKDIR /var/www/html

# Copy project
COPY . .

# Install dependencies
RUN composer install \
    --no-dev \
    --optimize-autoloader

# Create SQLite database
RUN mkdir -p database \
    && touch database/database.sqlite

# Set permissions
RUN chmod -R 777 storage bootstrap/cache database

# Laravel cache
RUN php artisan config:clear
RUN php artisan route:clear
RUN php artisan view:clear

# Railway uses this port
EXPOSE 8080

# Start application
CMD php artisan migrate --force && \
    php artisan serve --host=0.0.0.0 --port=${PORT:-8080}