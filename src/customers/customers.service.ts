import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileDto } from './dto/profileDto';
import { UserDto } from './dto/userDto';
import { ProfileEntity } from './entity/profileEntity';
import { UserEntity } from './entity/userEntity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomersService {
    constructor(
        @InjectRepository(ProfileEntity)
        private profileRepo: Repository<ProfileEntity>,

        @InjectRepository(UserEntity)
        private userRepo: Repository<UserEntity>,
    ) { }

    async signup(dto: ProfileDto): Promise<UserEntity> {
        const { firstName, lastName, image, user } = dto;

        const profileEntity = new ProfileEntity();
        profileEntity.firstName = firstName;
        profileEntity.lastName = lastName;
        profileEntity.image = image;
        //const savedProfileEntity = await this.profileRepo.save(profileEntity);


        const userEntity = new UserEntity();
        userEntity.email = user.email;
        const salt = await bcrypt.genSalt();
        const hassedpassed = await bcrypt.hash(user.password, salt);
        userEntity.password = hassedpassed;
        //userEntity.profile = savedProfileEntity;
        //const savedUserEntity = await this.userRepo.save(userEntity);

        return userEntity;
    }
}

