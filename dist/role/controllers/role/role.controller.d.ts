import { RoleDto } from '../dtos/Role.dto';
export declare class RoleController {
    getRoles(): {
        message: string;
        data: {
            id: number;
            title: string;
        }[];
    };
    getRole(): {
        message: string;
        data: {
            title: string;
        };
    };
    createRole(payload: RoleDto): {
        message: string;
    };
}
