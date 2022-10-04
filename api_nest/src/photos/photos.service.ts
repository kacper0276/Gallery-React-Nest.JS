import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Albums } from 'src/dtos/albums.entity';
import { Photos } from 'src/dtos/photos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photos)
    private photosRepository: Repository<Photos>,

    @InjectRepository(Albums)
    private albumsRepository: Repository<Albums>,
  ) {}

  async addPhotoToAlbum(file, dataForm) {
    const { filename } = file,
      { owner } = dataForm,
      { album } = dataForm,
      { optionalDescription } = dataForm;

    const photoData = {
      img: filename,
      album: album,
      optionalDescription: optionalDescription,
      owner: owner,
    };

    this.photosRepository.save(photoData);

    return { message: 'Dodano zdjęcie' };
  }

  async photosInAlbumUser(params) {
    const { owner } = params,
      { name } = params;

    const nameAlbum = await this.albumsRepository.findBy({
      id: name,
    });

    const photosInAlbum = await this.photosRepository.findBy({
      owner: owner,
      album: nameAlbum[0].nameAlbum,
    });

    return { photos: photosInAlbum };
  }
}
