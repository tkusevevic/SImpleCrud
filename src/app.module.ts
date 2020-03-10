import { UsersModule } from "./modules/users/users.module";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "dev_simple",
      synchronize: false,
      dropSchema: false,
      entities: ["dist/**/*.entity.js"],
      migrations: ["dist/migrations/**.js"],
      subscribers: ["subscriber/**/*.ts", "dist/subscriber/**/.js"],
      cli: {
        entitiesDir: "src",
        migrationsDir: "migrations",
        subscribersDir: "subscriber",
      },
    }),
  ],
})
export class AppModule {}
