import { Controller,Post,Patch,Get,Delete,Body,Param, ParseIntPipe } from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { Trivia } from './trivia.entity';
import { CrearTriviaDto } from './Dto/create-trivia.dto';
import { UpdateTriviaDto } from './Dto/update-trivia.dto';


@Controller('trivia')
export class TriviaController {

    constructor(private triviaService : TriviaService){}

    @Get()
    getTrivias(){
        return this.triviaService.getTrivias();
    }

    @Get(':id')
    getTrivia(@Param('id', ParseIntPipe) id:number): Promise<Trivia>{
        return this.triviaService.getTrivia(id);
    }

    @Post()
    createTrivia(@Body() newTrivia:CrearTriviaDto){
        console.log(newTrivia)
        return this.triviaService.createTrivia(newTrivia)
    }

    @Delete(':id')
    deleteTrivia(@Param('id', ParseIntPipe) id:number){
        return this.triviaService.deleteTrivia(id);
    }
    
    @Patch(':id')
    updateTrivia(@Param('id', ParseIntPipe) id:number, @Body() trivia: UpdateTriviaDto){
        return this.triviaService.updateTrivia(id, trivia)
    }
}