import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: process.env.CORS_ORIGIN });
  const options = new DocumentBuilder()
    .setTitle('Simple CRUD')
    .setDescription('The CRUD API description')
    .setVersion('1.0')
    .addTag('CRUD')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  console.log(`LISTENING TO localhost:4213/api`)
  await app.listen(4213);
}
bootstrap();
