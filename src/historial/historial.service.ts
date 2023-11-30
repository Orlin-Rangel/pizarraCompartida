import { Injectable } from '@nestjs/common';

@Injectable()
export class HistorialService {
    private historiales: any[] = [];
    findOne(id: number): string {
        return `Get historial with id ${id}`;
    }
    findAll(): string {
        return 'Get all historial';
    }
    create(createHistorialDto): string {
        this.historiales.push(createHistorialDto);
        return 'Historial created successfully';
    }
    update(id, updateHistorial): string {
        return 'Historial updated successfully';
    }
    delete(id): string {
        return 'Historial deleted successfully';
    }

}
