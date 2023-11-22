import { Injectable } from '@nestjs/common';
import { Historia } from './historia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearHistoriaDto } from './Dto/create-historia.dto';
import { UpdateHistoriaDto } from './Dto/update-historia.dto';

@Injectable()
export class HistoriaService {


    // Usuarios
    constructor(@InjectRepository(Historia) private historiaRepository: Repository<Historia>) { }

    //CREAR
    createHistoria(historia: CrearHistoriaDto) {

        const NewHistoria = this.historiaRepository.create(historia)
        return this.historiaRepository.save(NewHistoria)
    }

    //OBTENER
    getHistorias() {
        return this.historiaRepository.find()
    }

    //OBTENER SOLO UNO
    getHistoria(id: number) {
        return this.historiaRepository.findOne({
            where: {
                id
            }
        })
    }

    //ELIMINAR
    deleteHistoria(id: number) {
        return this.historiaRepository.delete({id})
    }

    //EDITAR
    updateHistoria(id: number, historia: UpdateHistoriaDto){
        return this.historiaRepository.update({id}, historia)
    }

}
