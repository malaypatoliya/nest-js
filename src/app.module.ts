import { Module } from '@nestjs/common';
import { RoleModule } from './role/role.module';

@Module({
  imports: [RoleModule],
  controllers: [],
  providers: [],
})

export class AppModule {}