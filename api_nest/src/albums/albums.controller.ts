import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import AlbumsService from './albums.service';
import { diskStorage } from 'multer';

const storage = {
  storage: diskStorage({
    destination: '../../gallery/public/uploads',
    filename: function (req, file, cb) {
      const name = Date.now() + Math.floor(Math.random() * 100) + '.jpg';

      cb(null, name);
    },
  }),
};

@Controller('album')
export class AlbumsController {
  constructor(private albumsService: AlbumsService) {}

  @Post('/add')
  @UseInterceptors(FileInterceptor('img', storage))
  async addAlbum(@UploadedFile() file, @Body() formData) {
    return await this.albumsService.addAlbum(file, formData);
  }

  @Get('/showuseralbums/:username')
  async getUserAlbums(@Param() params) {
    return this.albumsService.getUserAlbums(params);
  }

  @Get('/alluseralbums/:username')
  async getUserAlbumsToForm(@Param() params) {
    return this.albumsService.getUserAlbumsToForm(params);
  }

  @Get('/geteditalbums/:username')
  async getAlbumsToEdit(@Param() params) {
    return this.albumsService.getAlbumsToEdit(params);
  }

  @Get('/deletealbum/:id')
  async deleteAlbum(@Param() params) {
    return this.albumsService.deleteAlbum(params);
  }
}
