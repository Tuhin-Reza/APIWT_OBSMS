import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { ProfileDto } from './dto/profileDto';
import { UserDto } from './dto/userDto';
import { ProfileEntity } from './entity/profileEntity';

@Controller('customers')
export class CustomersController {
    service: any;
    constructor(private customerService: CustomersService) { }


    @Post('/signup')
    // @UsePipes(new ValidationPipe())
    signup(
        @Body() dto: ProfileDto,

    ) {

        const dto2 = dto.user;

        // console.log(dto.firstName)
        //console.log(dto.user.email);
        //console.log(dto2);
        return this.customerService.signup(dto);
        //  console.log(dto2);
    }
}
