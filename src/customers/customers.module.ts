import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { ProfileEntity } from './entity/profileEntity';
import { UserEntity } from './entity/userEntity';

@Module({
  imports: [TypeOrmModule.forFeature([
    ProfileEntity,
    UserEntity
  ])],
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule { }
