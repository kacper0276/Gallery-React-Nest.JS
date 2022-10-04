import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Albums } from 'src/dtos/albums.entity';
import { Photos } from 'src/dtos/photos.entity';
import { PhotosController } from './photos.controller';
import { PhotosService } from './photos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Photos, Albums])],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
