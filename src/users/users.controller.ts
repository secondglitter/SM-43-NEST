import { Controller,Post,Patch,Get,Delete,Body,Param, ParseIntPipe } from '@nestjs/common';
import { CrearUsersDto } from './Dto/create-users.dto';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { UpdateUsersDto } from './Dto/update-users.dto';


@Controller('users')
export class UsersController {

    constructor(private usersService : UsersService){}

    @Get()
    getUsers(){
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id:number): Promise<User>{
        return this.usersService.getUser(id);
    }

    @Post()
    createUser(@Body() newUser:CrearUsersDto){
        console.log(newUser)
        return this.usersService.createUser(newUser)
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id:number){
        return this.usersService.deleteUser(id);
    }
    
    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id:number, @Body() user: UpdateUsersDto){
        return this.usersService.updateUser(id, user)
    }

}
