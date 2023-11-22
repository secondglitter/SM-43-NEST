import { Module } from '@nestjs/common';
import { HistoriaController } from './historia.controller';
import { HistoriaService } from './historia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Historia } from './historia.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Historia])],
  controllers: [HistoriaController],
  providers: [HistoriaService]
})
export class HistoriaModule {}
