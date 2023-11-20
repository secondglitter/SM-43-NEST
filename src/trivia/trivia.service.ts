import { Injectable } from '@nestjs/common';
import { Trivia } from './trivia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearTriviaDto } from './Dto/create-trivia.dto';
import { UpdateTriviaDto } from './Dto/update-trivia.dto';

@Injectable()
export class TriviaService {


    // Usuarios
    constructor(@InjectRepository(Trivia) private triviaRepository: Repository<Trivia>) { }

    //CREAR
    createTrivia(trivia: CrearTriviaDto) {

        const NewTrivia = this.triviaRepository.create(trivia)
        return this.triviaRepository.save(NewTrivia)
    }

    //OBTENER
    getTrivias() {
        return this.triviaRepository.find()
    }

    //OBTENER SOLO UNO
    getTrivia(id: number) {
        return this.triviaRepository.findOne({
            where: {
                id
            }
        })
    }

    //ELIMINAR
    deleteTrivia(id: number) {
        return this.triviaRepository.delete({id})
    }

    //EDITAR
    updateTrivia(id: number, trivia: UpdateTriviaDto){
        return this.triviaRepository.update({id}, trivia)
    }

}
