import { Controller,Post,Patch,Get,Delete,Body,Param, ParseIntPipe } from '@nestjs/common';
import { UpdateCategoriaDto } from './Dto/update-categorias.dto';
import { CategoriasService } from './categorias.service';
import { Categoria } from './categorias.entity';
import { CrearCategoriaDto } from './Dto/create-categorias.dto';


@Controller('categorias')
export class CategoriasController {

    constructor(private categoriaService : CategoriasService){}

    @Get()
    getCategorias(){
        return this.categoriaService.getCategorias();
    }

    @Get(':id')
    getCategoria(@Param('id', ParseIntPipe) id:number): Promise<Categoria>{
        return this.categoriaService.getCategoria(id);
    }

    @Post()
    createCategoria(@Body() newCategoria:CrearCategoriaDto){
        console.log(newCategoria)
        return this.categoriaService.createCategoria(newCategoria)
    }

    @Delete(':id')
    deleteCategoria(@Param('id', ParseIntPipe) id:number){
        return this.categoriaService.deleteCategoria(id);
    }
    
    @Patch(':id')
    updateCategoria(@Param('id', ParseIntPipe) id:number, @Body() categoria: UpdateCategoriaDto){
        return this.categoriaService.updateCategoria(id, categoria)
    }

}
