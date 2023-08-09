# Setup DB

```
$ sudo -u postgres psql // Masuk ke consol postgres
postgres=# ALTER USER postgres PASSWORD '12345678'; // Jika ingin ganti password
postgres=# create database belajar_knex; // Membuat DB
postgres=# \c belajar_knex // Connect ke DB
```

# Install Module

```
$ npm i knex pg dotenv
$ npm i nodemon -D
```

# Lakukan Migration

```
$ knex migrate:make NamaMigration // Membuat file migration
$ npm run migrate // Jalankan migration
$ knex migrate:up migration_name.js // Jalankan 1 migration
```

# Lakukan Seeding

```
$ knex seed:make NamaSeeder // Membuat file seeder
$ npm run seed // Jalankan seeding
$ knex seed:run --specific=filename.js --specific=filename.js //Jalankan secara spesifik file
```
