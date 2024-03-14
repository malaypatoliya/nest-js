import { Type } from "class-transformer";
import { IsNotEmpty, ValidateNested } from "class-validator";


export class RoleDto {
    @IsNotEmpty()
    title: string;

    @ValidateNested({ each: true })
    @Type(() => UpdateRoleDto)
    data: UpdateRoleDto[];

    @ValidateNested({ each: true })
    @Type(() => DeleteRoleDto)
    data1: DeleteRoleDto[]; 
}

export class UpdateRoleDto {
    @IsNotEmpty()
    title1: string;
}

export class DeleteRoleDto {
    @IsNotEmpty()
    title1: string;
}
