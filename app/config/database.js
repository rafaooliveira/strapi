module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
<<<<<<< HEAD
        host: env('DATABASE_HOST', 'localhost'),
=======
        host: env('DATABASE_HOST', 'postgres'),
>>>>>>> 860409953cb85628d4ff72e7a50a0b8e2683335e
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
<<<<<<< HEAD
        schema: env('DATABASE_SCHEMA', 'public'), // Not Required
=======
        ssl: env.bool('DATABASE_SSL', false),
>>>>>>> 860409953cb85628d4ff72e7a50a0b8e2683335e
        ssl: {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
        },
      },
<<<<<<< HEAD
      options: {
        ssl: env.bool('DATABASE_SSL', false),
      },
=======
      options: {}
>>>>>>> 860409953cb85628d4ff72e7a50a0b8e2683335e
    },
  },
});