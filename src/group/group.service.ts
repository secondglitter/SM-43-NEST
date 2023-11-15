import { Injectable } from '@nestjs/common';
import { Group } from './group.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearGroupDto } from './Dto/create-group.dto';
import { UpdateGroupDto } from './Dto/update-group.dto';

@Injectable()
export class GroupService {


    // Usuarios
    constructor(@InjectRepository(Group) private groupRepository: Repository<Group>) { }

    //CREAR
    createGroup(group: CrearGroupDto) {

        const NewGroup = this.groupRepository.create(group)
        return this.groupRepository.save(NewGroup)
    }

    //OBTENER
    getGroups() {
        return this.groupRepository.find()
    }

    //OBTENER SOLO UNO
    getGroup(id: number) {
        return this.groupRepository.findOne({
            where: {
                id
            }
        })
    }

    //ELIMINAR
    deleteGroup(id: number) {
        return this.groupRepository.delete({id})
    }

    //EDITAR
    updateGroup(id: number, group: UpdateGroupDto){
        return this.groupRepository.update({id}, group)
    }

}
