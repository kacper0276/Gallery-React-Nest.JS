import { Albums } from 'src/dtos/albums.entity';
import { Repository } from 'typeorm';
export declare class MainService {
    private albumsRepository;
    constructor(albumsRepository: Repository<Albums>);
    mainReturn(): {
        message: string;
    };
    loginUser(dataLogin: any): {
        loginStatus: string;
    };
    renderAlbums(): Promise<{
        message: Albums[];
    }>;
}
