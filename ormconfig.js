module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "dev_simple",
  synchronize: false,
  dropSchema: false,
  logging: true,
  entities: ["dist/**/*.entity.js"],
  migrations: ["dist/migrations/**.js"],
  subscribers: ["subscriber/**/*.ts", "dist/subscriber/**/.js"],
  cli: {
    entitiesDir: "src",
    migrationsDir: "migrations",
    subscribersDir: "subscriber",
  },
};
