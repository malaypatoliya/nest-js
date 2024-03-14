import { Module } from '@nestjs/common';
// import { RoleModule } from './role/role.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }