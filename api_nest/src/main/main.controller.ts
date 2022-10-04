import { Body, Controller, Get, Post } from '@nestjs/common';
import { MainService } from './main.service';

@Controller('main')
export class MainController {
  constructor(private mainService: MainService) {}

  @Get()
  async someFunction() {
    return await this.mainService.mainReturn();
  }

  @Post('/login')
  async create(@Body() dataLogin) {
    return this.mainService.loginUser(dataLogin);
  }

  @Get('/albums')
  async getAlbums() {
    return await this.mainService.renderAlbums();
  }
}
