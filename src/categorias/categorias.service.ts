import { Injectable } from '@nestjs/common';
import { Categoria } from './categorias.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearCategoriaDto } from './Dto/create-categorias.dto';
import { UpdateCategoriaDto } from './Dto/update-categorias.dto';


@Injectable()
export class CategoriasService {


    // Usuarios
    constructor(@InjectRepository(Categoria) private categoriaRepository: Repository<Categoria>) { }

    //CREAR
    createCategoria(categoria: CrearCategoriaDto) {

        const NewCategoria = this.categoriaRepository.create(categoria)
        return this.categoriaRepository.save(NewCategoria)
    }

    //OBTENER
    getCategorias() {
        return this.categoriaRepository.find()
    }

    //OBTENER SOLO UNO
    getCategoria(id: number) {
        return this.categoriaRepository.findOne({
            where: {
                id
            }
        })
    }

    //ELIMINAR
    deleteCategoria(id: number) {
        return this.categoriaRepository.delete({id})
    }

    //EDITAR
    updateCategoria(id: number, categoria: UpdateCategoriaDto){
        return this.categoriaRepository.update({id}, categoria)
    }

}
