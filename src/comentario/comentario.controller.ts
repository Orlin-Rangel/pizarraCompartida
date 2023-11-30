import { Controller, Get, Post, Body, Param, Put, Delete, Patch,} from '@nestjs/common';
import { ComentarioService } from './comentario.service';

@Controller('comentario')
export class ComentarioController {
    constructor(private readonly comentarioService: ComentarioService) { }
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
        return this.comentarioService.findOne(id);
    }
    @Get()
    findAll(): string {
        return this.comentarioService.findAll();
    }
    @Post()
    create(@Body() createComentarioDto): string {
        return this.comentarioService.create(createComentarioDto);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateComentario): string {
        return this.comentarioService.update(id, updateComentario);
    }
    @Delete(':id')
    delete(@Param('id') id: number): string {
        return this.comentarioService.delete(id);
    }

}
