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
exports.AlbumsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const albums_service_1 = require("./albums.service");
const multer_1 = require("multer");
const storage = {
    storage: (0, multer_1.diskStorage)({
        destination: '../../gallery/public/uploads',
        filename: function (req, file, cb) {
            const name = Date.now() + Math.floor(Math.random() * 100) + '.jpg';
            cb(null, name);
        },
    }),
};
let AlbumsController = class AlbumsController {
    constructor(albumsService) {
        this.albumsService = albumsService;
    }
    async addAlbum(file, formData) {
        return await this.albumsService.addAlbum(file, formData);
    }
    async getUserAlbums(params) {
        return this.albumsService.getUserAlbums(params);
    }
    async getUserAlbumsToForm(params) {
        return this.albumsService.getUserAlbumsToForm(params);
    }
    async getAlbumsToEdit(params) {
        return this.albumsService.getAlbumsToEdit(params);
    }
    async deleteAlbum(params) {
        return this.albumsService.deleteAlbum(params);
    }
};
__decorate([
    (0, common_1.Post)('/add'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img', storage)),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "addAlbum", null);
__decorate([
    (0, common_1.Get)('/showuseralbums/:username'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "getUserAlbums", null);
__decorate([
    (0, common_1.Get)('/alluseralbums/:username'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "getUserAlbumsToForm", null);
__decorate([
    (0, common_1.Get)('/geteditalbums/:username'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "getAlbumsToEdit", null);
__decorate([
    (0, common_1.Get)('/deletealbum/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AlbumsController.prototype, "deleteAlbum", null);
AlbumsController = __decorate([
    (0, common_1.Controller)('album'),
    __metadata("design:paramtypes", [albums_service_1.default])
], AlbumsController);
exports.AlbumsController = AlbumsController;
//# sourceMappingURL=albums.controller.js.map