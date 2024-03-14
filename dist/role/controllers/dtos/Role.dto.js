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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRoleDto = exports.UpdateRoleDto = exports.RoleDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class RoleDto {
}
exports.RoleDto = RoleDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RoleDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => UpdateRoleDto),
    __metadata("design:type", Array)
], RoleDto.prototype, "data", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => DeleteRoleDto),
    __metadata("design:type", Array)
], RoleDto.prototype, "data1", void 0);
class UpdateRoleDto {
}
exports.UpdateRoleDto = UpdateRoleDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UpdateRoleDto.prototype, "title1", void 0);
class DeleteRoleDto {
}
exports.DeleteRoleDto = DeleteRoleDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], DeleteRoleDto.prototype, "title1", void 0);
//# sourceMappingURL=Role.dto.js.map