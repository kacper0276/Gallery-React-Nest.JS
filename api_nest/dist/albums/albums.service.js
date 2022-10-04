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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const albums_entity_1 = require("../dtos/albums.entity");
const photos_entity_1 = require("../dtos/photos.entity");
const typeorm_2 = require("typeorm");
const fs = require("fs");
let AlbumsService = class AlbumsService {
    constructor(albumsRepository, photosRepository) {
        this.albumsRepository = albumsRepository;
        this.photosRepository = photosRepository;
    }
    async addAlbum(file, formData) {
        const { name } = formData, { owner } = formData;
        const { filename } = file;
        const newAlbum = {
            nameAlbum: name,
            miniImg: filename,
            owner: owner,
        };
        this.albumsRepository.save(newAlbum);
        return { message: 'Dodano album' };
    }
    async getUserAlbums(params) {
        const username = params.username;
        const albumsUser = await this.albumsRepository.findBy({
            owner: username,
        });
        return { albums: albumsUser };
    }
    async getUserAlbumsToForm(params) {
        const username = params.username;
        const albumsUser = await this.albumsRepository.findBy({
            owner: username,
        });
        return { albums: albumsUser };
    }
    async getAlbumsToEdit(params) {
        const { username } = params;
        const albumsUser = await this.albumsRepository.findBy({
            owner: username,
        });
        return { albums: albumsUser };
    }
    async deleteAlbum(params) {
        const { id } = params;
        const album = await this.albumsRepository.findBy({
            id: id,
        });
        const photosInAlbum = await this.photosRepository.findBy({
            album: album[0].nameAlbum,
            owner: album[0].owner,
        });
        photosInAlbum.forEach((photo) => {
            fs.unlinkSync(`../../gallery/public/uploadsImg/${photo.img}`);
        });
        await this.photosRepository.delete({
            album: album[0].nameAlbum,
            owner: album[0].owner,
        });
        fs.unlinkSync(`../../gallery/public/uploads/${album[0].miniImg}`);
        await this.albumsRepository.delete({
            id: id,
        });
        return { message: 'Usunięto album wraz ze zdjęciami' };
    }
};
AlbumsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(albums_entity_1.Albums)),
    __param(1, (0, typeorm_1.InjectRepository)(photos_entity_1.Photos)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AlbumsService);
exports.default = AlbumsService;
//# sourceMappingURL=albums.service.js.map