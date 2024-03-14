import { Module } from '@nestjs/common';
import { RoleController } from './controllers/role/role.controller';

@Module({
  controllers: [RoleController]
})
export class RoleModule { }