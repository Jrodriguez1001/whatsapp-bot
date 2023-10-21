import { Controller, Get } from '@nestjs/common';

@Controller('whatsapp')
export class WhatsappController {
  @Get('test')
  test(): any {
    return { msg: 'Hola mundo' };
  }
}
