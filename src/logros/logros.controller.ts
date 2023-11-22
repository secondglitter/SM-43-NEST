import { Controller,Post,Patch,Get,Delete,Body,Param, ParseIntPipe } from '@nestjs/common';
import { CrearLogrosDto } from './Dto/create-logros.dto';
import { LogrosService } from './logros.service';
import { Logro } from './logros.entity';
import { UpdateLogrosDto } from './Dto/update-logros.dto';


@Controller('logros')
export class LogrosController {

    constructor(private logrosService : LogrosService){}

    @Get()
    getLogros(){
        return this.logrosService.getLogros();
    }

    @Get(':id')
    getLogro(@Param('id', ParseIntPipe) id:number): Promise<Logro>{
        return this.logrosService.getLogro(id);
    }

    @Post()
    createLogro(@Body() newLogro:CrearLogrosDto){
        console.log(newLogro)
        return this.logrosService.createLogro(newLogro)
    }

    @Delete(':id')
    deleteLogro(@Param('id', ParseIntPipe) id:number){
        return this.logrosService.deleteLogro(id);
    }
    
    @Patch(':id')
    updateLogro(@Param('id', ParseIntPipe) id:number, @Body() logro: UpdateLogrosDto){
        return this.logrosService.updateLogro(id, logro)
    }

}
