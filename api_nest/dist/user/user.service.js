"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../dtos/users.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async register(dataLogin) {
        const salt = bcrypt.genSaltSync(10);
        const { login } = dataLogin.dataLogin, { password } = dataLogin.dataLogin, { sec_password } = dataLogin.dataLogin;
        const hash = bcrypt.hashSync(password, salt);
        const userData = {
            login: login,
            password: hash,
        };
        const user = await this.userRepository.findBy({
            login: login,
        });
        if (user.length > 0) {
            return { message: 'Użytkownik o podanym loginie istnieje' };
        }
        else if (password !== sec_password) {
            return { message: 'Hasła nie są takie same!! ' };
        }
        else {
            await this.userRepository.save(userData);
            return { message: 'Dodano użytkownika!!' };
        }
    }
    async login(dataLogin) {
        const { login } = dataLogin.dataLogin, { password } = dataLogin.dataLogin;
        const user = await this.userRepository.findBy({
            login: login,
        });
        if (user.length > 0) {
            const comparePassword = await bcrypt.compare(password, user[0].password);
            if (comparePassword === true) {
                return { user: user[0].login };
            }
            else {
                return { message: 'Zły login lub hasło' };
            }
        }
        else {
            return { message: 'Zły login lub hasło' };
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map