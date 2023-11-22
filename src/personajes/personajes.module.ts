import { Module } from '@nestjs/common';
import { PersonajesController } from './personajes.controller';
import { PersonajesService } from './personajes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personaje } from './personajes.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Personaje])],
  controllers: [PersonajesController],
  providers: [PersonajesService]
})
export class PersonajesModule {}
