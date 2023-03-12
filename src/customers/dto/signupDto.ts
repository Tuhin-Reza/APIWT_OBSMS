import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";
import { Unique } from "typeorm";

export class signupdto {

    @IsNotEmpty({ message: "Name is required" })
    @IsString({ message: "Name must be string" })
    @Length(3, 8, { message: "firstName length must greater then 3 &less then 8" })
    firstName: string;

    @IsNotEmpty({ message: "Name is requiredsss" })
    @IsString({ message: "Name must be stringssss" })
    @Length(3, 8, { message: "lastName length must greater then 3 &less then 8" })
    lastName: string;

    @IsNotEmpty()
    image: string;

    @IsNotEmpty({ message: "Email is required" })
    @IsEmail()
    @Unique(['email'])
    email: string;

    @IsNotEmpty({ message: "Password is required" })
    @Length(3, 8, { message: "Length must greater then 3 &less then 8" })
    @Unique(['password'])
    password: string;

}