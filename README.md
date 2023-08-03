# Epic Stack - Prisma with Mongodb example

This demonstrates how to use your Epic Stack application with Prisma as the database ORM and MongoDB as the database.

1. Before starting the service, make sure you have Docker installed on your machine. Once you have Docker, create a `docker-compose.yml` file with the following content:

```yml
version: '3.7'

services:
  mongodb:
    # This image automatically creates a replica set required for transactions
    image: prismagraphql/mongo-single-replica:4.4.3-bionic
    environment:
      MONGO_INITDB_ROOT_USERNAME: epicAdmin
      MONGO_INITDB_ROOT_PASSWORD: kodylovesyou
      INIT_WAIT_SEC: 3
    ports:
      - 27017:27017
```

2. Then, open a terminal window in the same directory as your docker-compose.yml file and run the following command to start the MongoDB service:

```bash
docker-compose up -d
```

To check if the MongoDB service is running properly, you can execute the following command to see the running Docker containers:

```bash
docker ps
```

3. To connect to the MongoDB container from the `docker-compose.yml` file using the provided credentials, you can define the DATABASE_URL environment variable in your `.env` file as follows:

```bash
DATABASE_URL="mongodb://epicAdmin:kodylovesyou@localhost:27017/epicdb?authSource=admin"
```

---
NB: `npm run setup` and `npm run dev` for get started.
