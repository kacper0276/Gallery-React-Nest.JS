import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async registerFunction(@Body() dataLogin) {
    return await this.userService.register(dataLogin);
  }

  @Post('/login')
  async loginFunction(@Body() dataLogin) {
    return await this.userService.login(dataLogin);
  }
}
