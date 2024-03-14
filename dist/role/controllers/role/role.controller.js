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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const Role_dto_1 = require("../dtos/Role.dto");
let RoleController = class RoleController {
    getRoles() {
        return {
            message: "Roles fetched successfully",
            data: [
                {
                    id: 1,
                    title: "admin"
                },
                {
                    id: 2,
                    title: "user"
                }
            ]
        };
    }
    getRole() {
        return {
            message: "Role fetched successfully",
            data: {
                title: "admin"
            }
        };
    }
    createRole(payload) {
        console.log('body: ', payload);
        return {
            message: "Role created successfully",
        };
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "getRoles", null);
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "getRole", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Role_dto_1.RoleDto]),
    __metadata("design:returntype", void 0)
], RoleController.prototype, "createRole", null);
exports.RoleController = RoleController = __decorate([
    (0, common_1.Controller)('role')
], RoleController);
//# sourceMappingURL=role.controller.js.map