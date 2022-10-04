import { Users } from 'src/dtos/users.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<Users>);
    register(dataLogin: any): Promise<{
        message: string;
    }>;
    login(dataLogin: any): Promise<{
        user: string;
        message?: undefined;
    } | {
        message: string;
        user?: undefined;
    }>;
}
