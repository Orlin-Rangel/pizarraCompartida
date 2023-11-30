import { Test, TestingModule } from '@nestjs/testing';
import { PizarraService } from './pizarra.service';

describe('PizarraService', () => {
  let service: PizarraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PizarraService],
    }).compile();

    service = module.get<PizarraService>(PizarraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
