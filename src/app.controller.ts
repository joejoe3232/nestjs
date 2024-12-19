import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { from } from 'rxjs';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'important' })
  sayThreeTimes(data: string) {
    return from([`${data}!`, `${data}!`, `${data}!`]);
  }
}
