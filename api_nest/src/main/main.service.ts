import { Injectable } from '@nestjs/common';
import { Albums } from 'src/dtos/albums.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MainService {
  constructor(
    @InjectRepository(Albums)
    private albumsRepository: Repository<Albums>,
  ) {}

  mainReturn() {
    return { message: 'Wiadomość z backendu (NEST.JS)' };
  }

  loginUser(dataLogin) {
    console.log(dataLogin);
    const { login } = dataLogin.dataLogin;

    console.log(login);

    return { loginStatus: 'Zalogowano' };
  }

  async renderAlbums() {
    return { message: await this.albumsRepository.find() };
  }
}
