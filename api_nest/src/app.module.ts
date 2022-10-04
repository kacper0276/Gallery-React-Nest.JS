import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainModule } from './main/main.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Albums } from './dtos/albums.entity';
import { UserModule } from './user/user.module';
import { Users } from './dtos/users.entity';
import AlbumsModule from './albums/albums.module';
import { Photos } from './dtos/photos.entity';
import { PhotosModule } from './photos/photos.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MainModule,
    UserModule,
    AlbumsModule,
    PhotosModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'gallery',
      entities: [Albums, Users, Photos],
      synchronize: true,
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'build'),
    //   exclude: ['/api*'],
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
