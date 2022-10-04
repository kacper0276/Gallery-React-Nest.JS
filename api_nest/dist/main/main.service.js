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
exports.MainService = void 0;
const common_1 = require("@nestjs/common");
const albums_entity_1 = require("../dtos/albums.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let MainService = class MainService {
    constructor(albumsRepository) {
        this.albumsRepository = albumsRepository;
    }
    mainReturn() {
        return { message: 'Wiadomość z backendu (NEST.JS)' };
    }
    loginUser(dataLogin) {
        console.log(dataLogin);
        const { login } = dataLogin.dataLogin;
        console.log(login);
        return { loginStatus: 'Zalogowano' };
    }
    async renderAlbums() {
        return { message: await this.albumsRepository.find() };
    }
};
MainService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(albums_entity_1.Albums)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MainService);
exports.MainService = MainService;
//# sourceMappingURL=main.service.js.map