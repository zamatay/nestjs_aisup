import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


async function bootstrap() {
  const PORT = process.env.PORT || 8086
  const app = await NestFactory.create(AppModule);

  const configSwagger = new DocumentBuilder()
      .setTitle('Api компании ВКБ')
      .setDescription('Документация к api')
      .setVersion('2.0.0')
      .build()
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api/docs', app, document)

  await app.listen(PORT, ()=>{
    console.log(`Server start on port: ${PORT}`)
  });
}
bootstrap();
