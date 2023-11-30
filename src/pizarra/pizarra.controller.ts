import { Controller, Get, Post, Body, Param, Put, Delete, Patch,} from '@nestjs/common';
import { PizarraService } from './pizarra.service';


@Controller('pizarra')
export class PizarraController {
    constructor(private readonly pizarraService: PizarraService) { }
    // find one by id findOne(id)
    @Get(':id')
    findOne(@Param('id') id: number): string {
        return this.pizarraService.findOne(id);
    }
    @Get()
    findAll(): string {
        return this.pizarraService.findAll();
    }
    @Post()
    create(@Body() createPizarraDto): string {
        return this.pizarraService.create(createPizarraDto);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() updatePizarra): string {
        return this.pizarraService.update(id, updatePizarra);
    }
    @Delete(':id')
    delete(@Param('id') id: number): string {
        return this.pizarraService.delete(id);
    }
}

