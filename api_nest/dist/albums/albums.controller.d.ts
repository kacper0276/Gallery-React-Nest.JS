import AlbumsService from './albums.service';
export declare class AlbumsController {
    private albumsService;
    constructor(albumsService: AlbumsService);
    addAlbum(file: any, formData: any): Promise<{
        message: string;
    }>;
    getUserAlbums(params: any): Promise<{
        albums: import("../dtos/albums.entity").Albums[];
    }>;
    getUserAlbumsToForm(params: any): Promise<{
        albums: import("../dtos/albums.entity").Albums[];
    }>;
    getAlbumsToEdit(params: any): Promise<{
        albums: import("../dtos/albums.entity").Albums[];
    }>;
    deleteAlbum(params: any): Promise<{
        message: string;
    }>;
}
