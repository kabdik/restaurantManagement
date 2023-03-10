import { Body, Controller, Post } from '@nestjs/common';

import { UseAuth } from '@/common/decorators/auth.decorator';
import { ReqUser } from '@/common/decorators/req-user.decorator';

import type { UserPayload } from '../auth/auth.interface';
import { UserRoleType } from '../user/enums/user-role.enum';
import { CreateStaffBodyDto } from './dto/create-staff.body.dto';
import type { RestaurantStaff } from './interfaces/restaurant-staff.interface';
import { RestaurantStaffService } from './restaurant-staff.service';

@Controller('restaurant-staff')
export class RestaurantStaffController {
  constructor(private restaurantStaffService:RestaurantStaffService) {}

  @UseAuth(UserRoleType.RESTAURANT_OWNER)
  @Post('create')
  public async createStaff(@Body() data:CreateStaffBodyDto, @ReqUser() restaurantOwner:UserPayload):Promise<RestaurantStaff> {
    return this.restaurantStaffService.createStaff(data, restaurantOwner);
  }
}
