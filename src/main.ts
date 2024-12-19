import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0', //要連線的主機
        port: 3333, //指定要連線的主機 port
        retryAttempts: 0, //當無法連至主機時的重試次數，預設是 0
        retryDelay: 0, //每次重試的間隔時間，以毫秒(ms)為單位，預設是 0
      },
    },
  );
  await app.listen();
}
bootstrap();
