import { Controller,Post,Patch,Get,Delete,Body,Param, ParseIntPipe } from '@nestjs/common';
import { HistoriaService } from './historia.service';
import { Historia } from './historia.entity';
import { CrearHistoriaDto } from './Dto/create-historia.dto';
import { UpdateHistoriaDto } from './Dto/update-historia.dto';


@Controller('historia')
export class HistoriaController {

    constructor(private historiaService : HistoriaService){}

    @Get()
    getHistorias(){
        return this.historiaService.getHistorias();
    }

    @Get(':id')
    getHistoria(@Param('id', ParseIntPipe) id:number): Promise<Historia>{
        return this.historiaService.getHistoria(id);
    }

    @Post()
    createHistoria(@Body() newHistoria:CrearHistoriaDto){
        console.log(newHistoria)
        return this.historiaService.createHistoria(newHistoria)
    }

    @Delete(':id')
    deleteHistoria(@Param('id', ParseIntPipe) id:number){
        return this.historiaService.deleteHistoria(id);
    }
    
    @Patch(':id')
    updateHistoria(@Param('id', ParseIntPipe) id:number, @Body() historia: UpdateHistoriaDto){
        return this.historiaService.updateHistoria(id, historia)
    }
}