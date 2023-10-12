import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearUsersDto } from './Dto/create-users.dto';
import { UpdateUsersDto } from './Dto/update-users.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    createUser(user: CrearUsersDto) {

        const NewUser = this.userRepository.create(user)
        return this.userRepository.save(NewUser)
    }


    getUsers() {
        return this.userRepository.find()
    }

    getUser(id: number) {
        return this.userRepository.findOne({
            where: {
                id
            }
        })
    }

    deleteUser(id: number) {
        return this.userRepository.delete({id})
    }

    updateUser(id: number, user: UpdateUsersDto){
        return this.userRepository.update({id}, user)
    }

}
