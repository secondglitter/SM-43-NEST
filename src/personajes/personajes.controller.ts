import { Controller,Post,Patch,Get,Delete,Body,Param, ParseIntPipe } from '@nestjs/common';
import { CrearPersonajeDto } from './Dto/create-personajes.dto';
import { PersonajesService } from './personajes.service';
import { Personaje } from './personajes.entity';
import { UpdatePersonajeDto } from './Dto/update-personajes.dto';


@Controller('personajes')
export class PersonajesController {

    constructor(private personajeService : PersonajesService){}

    @Get()
    getPersonajes(){
        return this.personajeService.getPersonajes();
    }

    @Get(':id')
    getPersonaje(@Param('id', ParseIntPipe) id:number): Promise<Personaje>{
        return this.personajeService.getPersonaje(id);
    }

    @Post()
    createPersonaje(@Body() newPersonaje:CrearPersonajeDto){
        console.log(newPersonaje)
        return this.personajeService.createPersonaje(newPersonaje)
    }

    @Delete(':id')
    deletePersonaje(@Param('id', ParseIntPipe) id:number){
        return this.personajeService.deletePersonaje(id);
    }
    
    @Patch(':id')
    updatePersonaje(@Param('id', ParseIntPipe) id:number, @Body() personaje: UpdatePersonajeDto){
        return this.personajeService.updatePersonaje(id, personaje)
    }

}