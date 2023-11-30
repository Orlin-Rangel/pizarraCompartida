import { Injectable } from '@nestjs/common';

@Injectable()
export class ComentarioService {
    private comentarios: any[] = [];
    findOne(id: number): string {
        return `Get comentario with id ${id}`;
    }
    findAll(): string {
        return 'Get all comentario';
    }
    create(createComentarioDto): string {
        this.comentarios.push(createComentarioDto);
        return 'Comentario created successfully';
    }
    update(id, updateComentario): string {
        return 'Comentario updated successfully';
    }
    delete(id): string {
        return 'Comentario deleted successfully';
    }
}
