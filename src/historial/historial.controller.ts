import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { HistorialService } from './historial.service';

@Controller('historial')
export class HistorialController {
    constructor(private readonly historialService: HistorialService) { }
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
        return this.historialService.findOne(id);
    }
    @Get()
    findAll(): string {
        return this.historialService.findAll();
    }
    @Post()
    create(@Body() createHistorialDto): string {
        return this.historialService.create(createHistorialDto);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updateHistorial): string {
        return this.historialService.update(id, updateHistorial);
    }
    @Delete(':id')
    delete(@Param('id') id: number): string {
        return this.historialService.delete(id);
    }

}
