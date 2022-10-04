import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { MainService } from './main.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Albums } from 'src/dtos/albums.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Albums])],
  controllers: [MainController],
  providers: [MainService],
})
export class MainModule {}
