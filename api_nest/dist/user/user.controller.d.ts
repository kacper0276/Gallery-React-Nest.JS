import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    registerFunction(dataLogin: any): Promise<{
        message: string;
    }>;
    loginFunction(dataLogin: any): Promise<{
        user: string;
        message?: undefined;
    } | {
        message: string;
        user?: undefined;
    }>;
}
