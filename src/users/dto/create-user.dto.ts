import {IsDecimal, IsEmail, IsNotEmpty} from "class-validator";

export class CreateUserDto {
    @IsDecimal()
    id: number;

    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string

}
