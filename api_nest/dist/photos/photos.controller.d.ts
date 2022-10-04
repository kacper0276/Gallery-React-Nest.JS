import { PhotosService } from './photos.service';
export declare class PhotosController {
    private photosService;
    constructor(photosService: PhotosService);
    addPhotoToAlbum(file: any, formData: any): Promise<{
        message: string;
    }>;
    photosInAlbum(params: any): Promise<{
        photos: import("../dtos/photos.entity").Photos[];
    }>;
}
