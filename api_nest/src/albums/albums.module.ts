import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Albums } from 'src/dtos/albums.entity';
import { Photos } from 'src/dtos/photos.entity';
import { AlbumsController } from './albums.controller';
import AlbumsService from './albums.service';

@Module({
  imports: [TypeOrmModule.forFeature([Albums, Photos])],
  providers: [AlbumsService],
  controllers: [AlbumsController],
})
export default class AlbumsModule {}
