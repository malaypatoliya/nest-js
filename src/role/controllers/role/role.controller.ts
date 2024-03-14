import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { RoleDto } from '../dtos/Role.dto';

@Controller('role')
export class RoleController {
    @Get('list')
    getRoles() {
        return {
            message: "Roles fetched successfully",
            data: [
                {
                    id: 1,
                    title: "admin"
                },
                {
                    id: 2,
                    title: "user"
                }
            ]
        };
    }

    @Get('/')
    getRole() {
        return {
            message: "Role fetched successfully",
            data: {
                title: "admin"
            }
        };
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createRole(@Body() payload: RoleDto) {
        console.log('body: ', payload);
        return {
            message: "Role created successfully",
        };
    }

}
