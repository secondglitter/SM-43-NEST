import { Injectable } from '@nestjs/common';
import { Logro } from './logros.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearLogrosDto } from './Dto/create-logros.dto';
import { UpdateLogrosDto } from './Dto/update-logros.dto';

@Injectable()
export class LogrosService {


    // Usuarios
    constructor(@InjectRepository(Logro) private logrosRepository: Repository<Logro>) { }

    //CREAR
    createLogro(logro: CrearLogrosDto) {

        const NewLogro = this.logrosRepository.create(logro)
        return this.logrosRepository.save(NewLogro)
    }

    //OBTENER
    getLogros() {
        return this.logrosRepository.find()
    }

    //OBTENER SOLO UNO
    getLogro(id: number) {
        return this.logrosRepository.findOne({
            where: {
                id
            }
        })
    }

    //ELIMINAR
    deleteLogro(id: number) {
        return this.logrosRepository.delete({id})
    }

    //EDITAR
    updateLogro(id: number, logro: UpdateLogrosDto){
        return this.logrosRepository.update({id}, logro)
    }

}