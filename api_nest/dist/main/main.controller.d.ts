import { MainService } from './main.service';
export declare class MainController {
    private mainService;
    constructor(mainService: MainService);
    someFunction(): Promise<{
        message: string;
    }>;
    create(dataLogin: any): Promise<{
        loginStatus: string;
    }>;
    getAlbums(): Promise<{
        message: import("../dtos/albums.entity").Albums[];
    }>;
}
