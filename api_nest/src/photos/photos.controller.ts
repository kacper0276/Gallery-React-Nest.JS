import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

const storage = {
  storage: diskStorage({
    destination: '../../gallery/public/uploadsImg',
    filename: function (req, file, cb) {
      const name = Date.now() + Math.floor(Math.random() * 100) + '.jpg';

      cb(null, name);
    },
  }),
};

@Controller('photos')
export class PhotosController {
  constructor(private photosService: PhotosService) {}

  @Post('/addphoto')
  @UseInterceptors(FileInterceptor('img', storage))
  async addPhotoToAlbum(@UploadedFile() file, @Body() formData) {
    return await this.photosService.addPhotoToAlbum(file, formData);
  }

  @Get('/photosinalbum/:owner/:name')
  async photosInAlbum(@Param() params) {
    return await this.photosService.photosInAlbumUser(params);
  }
}
