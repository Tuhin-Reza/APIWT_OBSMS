import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { Unique } from "typeorm";

export class UserDto {
    id: number;

    @IsNotEmpty({ message: "Email is required" })
    @IsEmail()
    @Unique(['email'])
    email: string;

    @IsNotEmpty({ message: "Password is required" })
    @Length(3, 8, { message: "Length must greater then 3 &less then 8" })
    @Unique(['password'])
    password: string;

    profileId: number;


}