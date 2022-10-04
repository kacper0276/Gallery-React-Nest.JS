import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Albums } from 'src/dtos/albums.entity';
import { Photos } from 'src/dtos/photos.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs';

@Injectable()
export default class AlbumsService {
  constructor(
    @InjectRepository(Albums)
    private albumsRepository: Repository<Albums>,

    @InjectRepository(Photos)
    private photosRepository: Repository<Photos>,
  ) {}

  async addAlbum(file, formData) {
    const { name } = formData,
      { owner } = formData;
    const { filename } = file;

    const newAlbum = {
      nameAlbum: name,
      miniImg: filename,
      owner: owner,
    };

    this.albumsRepository.save(newAlbum);
    return { message: 'Dodano album' };
  }

  async getUserAlbums(params) {
    const username = params.username;
    const albumsUser = await this.albumsRepository.findBy({
      owner: username,
    });

    return { albums: albumsUser };
  }

  async getUserAlbumsToForm(params) {
    const username = params.username;
    const albumsUser = await this.albumsRepository.findBy({
      owner: username,
    });

    return { albums: albumsUser };
  }

  async getAlbumsToEdit(params) {
    const { username } = params;

    const albumsUser = await this.albumsRepository.findBy({
      owner: username,
    });

    return { albums: albumsUser };
  }

  async deleteAlbum(params) {
    const { id } = params;

    const album = await this.albumsRepository.findBy({
      id: id,
    });
    const photosInAlbum = await this.photosRepository.findBy({
      album: album[0].nameAlbum,
      owner: album[0].owner,
    });

    photosInAlbum.forEach((photo) => {
      fs.unlinkSync(`../../gallery/public/uploadsImg/${photo.img}`);
    });
    await this.photosRepository.delete({
      album: album[0].nameAlbum,
      owner: album[0].owner,
    });
    fs.unlinkSync(`../../gallery/public/uploads/${album[0].miniImg}`);
    await this.albumsRepository.delete({
      id: id,
    });

    return { message: 'Usunięto album wraz ze zdjęciami' };
  }
}
