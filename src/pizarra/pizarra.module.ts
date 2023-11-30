import { Module } from '@nestjs/common';
import { PizarraController } from './pizarra.controller';
import { PizarraService } from './pizarra.service';

@Module({
  controllers: [PizarraController],
  providers: [PizarraService]
})
export class PizarraModule {}
