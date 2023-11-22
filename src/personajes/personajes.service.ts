import { Injectable } from '@nestjs/common';
import { Personaje } from './personajes.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearPersonajeDto } from './Dto/create-personajes.dto';
import { UpdatePersonajeDto } from './Dto/update-personajes.dto';

@Injectable()
export class PersonajesService {


    // Usuarios
    constructor(@InjectRepository(Personaje) private personajeRepository: Repository<Personaje>) { }

    //CREAR
    createPersonaje(personaje: CrearPersonajeDto) {

        const newPersonaje = this.personajeRepository.create(personaje)
        return this.personajeRepository.save(newPersonaje)
    }

    //OBTENER
    getPersonajes() {
        return this.personajeRepository.find()
    }

    //OBTENER SOLO UNO
    getPersonaje(id: number) {
        return this.personajeRepository.findOne({
            where: {
                id
            }
        })
    }

    //ELIMINAR
    deletePersonaje(id: number) {
        return this.personajeRepository.delete({id})
    }

    //EDITAR
    updatePersonaje(id: number, personaje: UpdatePersonajeDto){
        return this.personajeRepository.update({id}, personaje)
    }

 

}
