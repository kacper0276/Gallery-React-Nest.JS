import { Albums } from 'src/dtos/albums.entity';
import { Photos } from 'src/dtos/photos.entity';
import { Repository } from 'typeorm';
export default class AlbumsService {
    private albumsRepository;
    private photosRepository;
    constructor(albumsRepository: Repository<Albums>, photosRepository: Repository<Photos>);
    addAlbum(file: any, formData: any): Promise<{
        message: string;
    }>;
    getUserAlbums(params: any): Promise<{
        albums: Albums[];
    }>;
    getUserAlbumsToForm(params: any): Promise<{
        albums: Albums[];
    }>;
    getAlbumsToEdit(params: any): Promise<{
        albums: Albums[];
    }>;
    deleteAlbum(params: any): Promise<{
        message: string;
    }>;
}
