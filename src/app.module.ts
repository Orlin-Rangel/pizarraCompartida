import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizarraModule } from './pizarra/pizarra.module';
import { ComentarioModule } from './comentario/comentario.module';
import { HistorialModule } from './historial/historial.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://orangellambrano:APFklLEP6NTLn47k@cluster0.gww9f5j.mongodb.net/?retryWrites=true&w=majority'), // Cambiar la URL de conexión si es necesario
    PizarraModule, ComentarioModule, HistorialModule
    ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}


