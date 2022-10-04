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
exports.PhotosController = void 0;
const common_1 = require("@nestjs/common");
const photos_service_1 = require("./photos.service");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const storage = {
    storage: (0, multer_1.diskStorage)({
        destination: '../../gallery/public/uploadsImg',
        filename: function (req, file, cb) {
            const name = Date.now() + Math.floor(Math.random() * 100) + '.jpg';
            cb(null, name);
        },
    }),
};
let PhotosController = class PhotosController {
    constructor(photosService) {
        this.photosService = photosService;
    }
    async addPhotoToAlbum(file, formData) {
        return await this.photosService.addPhotoToAlbum(file, formData);
    }
    async photosInAlbum(params) {
        return await this.photosService.photosInAlbumUser(params);
    }
};
__decorate([
    (0, common_1.Post)('/addphoto'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img', storage)),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "addPhotoToAlbum", null);
__decorate([
    (0, common_1.Get)('/photosinalbum/:owner/:name'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "photosInAlbum", null);
PhotosController = __decorate([
    (0, common_1.Controller)('photos'),
    __metadata("design:paramtypes", [photos_service_1.PhotosService])
], PhotosController);
exports.PhotosController = PhotosController;
//# sourceMappingURL=photos.controller.js.map