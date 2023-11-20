import { Module } from '@nestjs/common';
import { TriviaController } from './trivia.controller';
import { TriviaService } from './trivia.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trivia } from './trivia.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Trivia])],
  controllers: [TriviaController],
  providers: [TriviaService]
})
export class TriviaModule {}
