FROM php:8.2-cli

# Install system dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    sqlite3 \
    libsqlite3-dev \
    libzip-dev \
    && docker-php-ext-install pdo pdo_sqlite zip \
    && rm -rf /var/lib/apt/lists/*

# Copy Composer from the official image
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Copy application files
COPY . .

# FIX: Added --no-scripts to prevent Laravel from crashing during build
RUN composer install --no-dev --optimize-autoloader --no-scripts

# Set up permissions and ensure SQLite database exists safely
RUN mkdir -p database storage bootstrap/cache \
    && [ -f database/database.sqlite ] || touch database/database.sqlite \
    && chmod -R 777 storage bootstrap/cache database

EXPOSE 10000

# FIX: Moved the missing automated scripts to run safely at runtime instead
CMD php artisan package:discover --ansi && \
    php artisan migrate --force && \
    exec php artisan serve --host=0.0.0.0 --port=10000
