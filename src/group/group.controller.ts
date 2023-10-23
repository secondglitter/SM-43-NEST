import { Controller,Post,Patch,Get,Delete,Body,Param, ParseIntPipe } from '@nestjs/common';
import { CrearGroupDto } from './Dto/create-group.dto';
import { GroupService } from './group.service';
import { Group } from './group.entity';
import { UpdateGroupDto } from './Dto/update-group.dto';


@Controller('group')
export class GroupController {

    constructor(private usersService : GroupService){}

    @Get()
    getGroups(){
        return this.usersService.getGroups();
    }

    @Get(':id')
    getGroup(@Param('id', ParseIntPipe) id:number): Promise<Group>{
        return this.usersService.getGroup(id);
    }

    @Post()
    createGroup(@Body() newUser:CrearGroupDto){
        console.log(newUser)
        return this.usersService.createGroup(newUser)
    }

    @Delete(':id')
    deleteGroup(@Param('id', ParseIntPipe) id:number){
        return this.usersService.deleteGroup(id);
    }
    
    @Patch(':id')
    updateGroup(@Param('id', ParseIntPipe) id:number, @Body() user: UpdateGroupDto){
        return this.usersService.updateGroup(id, user)
    }

}
