import { Injectable } from '@nestjs/common';
@Injectable()

export class PizarraService {
    private pizarras: any[] = [];
    findOne(id: number): string {
        return `Get pizarra with id ${id}`;
    }
    findAll(): string {
        return 'Get all pizarra';
    }
    create(createPizarraDto): string {
        this.pizarras.push(createPizarraDto);
        return 'Pizarra created successfully';
    }
    update(id, updatePizarra): string {
        return 'Pizarra updated successfully';
    }
    delete(id): string {
        return 'Pizarra deleted successfully';
    }
}
