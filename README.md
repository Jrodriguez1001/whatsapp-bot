<p align="center">
  <a href="#" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="200" alt="WhatsApp Logo" /></a>
</p>

# WhatsApp Bot

A bot designed to interact, manage, and facilitate various functions through WhatsApp.

## Description

Experience the power of the WhatsApp Bot! Our bot is engineered to enhance and automate interactions on WhatsApp. Whether you're looking to get quick responses, manage tasks, or integrate with other systems, the WhatsApp Bot is here to assist. With seamless integration and an intuitive design, it's your go-to companion for elevating your WhatsApp conversations.

## Configuration

To configure the database connection, you'll need to create a file named `orm.config.json` at the root of the project with the following structure:

```json
{
    "type": "your database type",
    "host": "your database host",
    "port": "your database port",
    "username": "your database username",
    "password": "your database password",
    "database": "your database name",
    "entities": ["src/**/*.entity.ts"],
    "migrations": ["src/database/migrations/*.ts"],
    "cli": {
        "migrationsDir": "src/database/migrations"
    }
}
```
# .env.development or .env.production

```js
# Application environment variables.
NODE_ENV=your_environment
PORT=0000

# Database environment variables.
DB_PORT=0000
DB_HOST=https://example.com
DB_NAME=example
DB_USER=username
DB_PASSWORD=password
```

#Installation
```bash
 yarn install
```

```bash
# development
 yarn run start

# watch mode
 yarn run start:dev

# production mode
 yarn run start:prod
```
```bash
# unit tests
 yarn run test

# e2e tests
 yarn run test:e2e

# test coverage
 yarn run test:cov
```

#This revised content now clearly communicates that the project is a WhatsApp bot.