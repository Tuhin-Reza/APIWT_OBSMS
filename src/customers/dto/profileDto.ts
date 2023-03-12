import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, Length, ValidateNested } from "class-validator";
import { Unique } from "typeorm";
import { UserDto } from "./userDto";

export class ProfileDto {
    id: number;

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

    //@IsNotEmpty()
    @ValidateNested()
    @Type(() => UserDto)
    user: UserDto;
}