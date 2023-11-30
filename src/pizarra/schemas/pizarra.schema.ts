import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface pizarra extends Document {
    title: string;
    descripcion: string;
    fechaCreacion: string;  
}
@Schema({ timestamps: true})
export class pizarra extends Document {
    @Prop({required: true})
    title: string;

    @Prop({required: true})
    descripcion: string;

    @Prop({required: true})
    fechaCreacion: string;
}

export const pizarraSchema = SchemaFactory.createForClass(pizarra);