"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const main_module_1 = require("./main/main.module");
const typeorm_1 = require("@nestjs/typeorm");
const albums_entity_1 = require("./dtos/albums.entity");
const user_module_1 = require("./user/user.module");
const users_entity_1 = require("./dtos/users.entity");
const albums_module_1 = require("./albums/albums.module");
const photos_entity_1 = require("./dtos/photos.entity");
const photos_module_1 = require("./photos/photos.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            main_module_1.MainModule,
            user_module_1.UserModule,
            albums_module_1.default,
            photos_module_1.PhotosModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'gallery',
                entities: [albums_entity_1.Albums, users_entity_1.Users, photos_entity_1.Photos],
                synchronize: true,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map