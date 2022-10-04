import { Albums } from 'src/dtos/albums.entity';
import { Photos } from 'src/dtos/photos.entity';
import { Repository } from 'typeorm';
export declare class PhotosService {
    private photosRepository;
    private albumsRepository;
    constructor(photosRepository: Repository<Photos>, albumsRepository: Repository<Albums>);
    addPhotoToAlbum(file: any, dataForm: any): Promise<{
        message: string;
    }>;
    photosInAlbumUser(params: any): Promise<{
        photos: Photos[];
    }>;
}
