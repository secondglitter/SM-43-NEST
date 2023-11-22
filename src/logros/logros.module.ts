import { Module } from '@nestjs/common';
import { LogrosController } from './logros.controller';
import { LogrosService } from './logros.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Logro } from './logros.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Logro])],
  controllers: [LogrosController],
  providers: [LogrosService]
})
export class LogrosModule {}
