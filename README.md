# Platzi Testing Course

### Prerequisites

- [`node js`](https://nodejs.org/en/) (`>= 16.18.1`)
- [`docker`](https://www.docker.com/) (`>= 20.10.21`)
- [`docker-compose`](https://docs.docker.com/compose/) (`>= 1.29.1`)

## Getting Started

First, change directory to /api and install the dependencies:

```bash

cd api; npm install

```
### Run unit tests
```bash
npm run test
```

### Run integration tests

```bash

make up-test; npm run test:integration

```

### Run end-to-end tests

```bash

make up-test; npm run test:e2e

```

### Run UI tests
From the root folder, change directory to /app
```bash
cd ./app
```

Install dependencies
```bash
npm install
```

Run tests
```bash
npm run test:ui
```

## Technologies

- Express

- Jest

- Supertest

- Playwright

### Mandatory environment variables

```bash

MONGO_DB_NAME
MONGO_URL=mongodb://<user>:<password>@localhost:27017?retryWrites=true&writeConcern=majority
MONGO_URL_E2E=mongodb://<user>:<password>@localhost:27018?retryWrites=true&writeConcern=majority

```
