import { Test, TestingModule } from '@nestjs/testing';
import { PizarraController } from './pizarra.controller';

describe('PizarraController', () => {
  let controller: PizarraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PizarraController],
    }).compile();

    controller = module.get<PizarraController>(PizarraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
