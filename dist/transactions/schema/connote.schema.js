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
exports.ConnoteSchema = exports.Connote = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Connote = class Connote {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "connote_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Connote.prototype, "connote_number", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "connote_service", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Connote.prototype, "connote_service_price", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Connote.prototype, "connote_amount", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "connote_code", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "connote_booking_code", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Connote.prototype, "connote_order", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "connote_state", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Connote.prototype, "connote_state_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "zone_code_from", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "zone_code_to", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Connote.prototype, "surcharge_amount", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "transaction_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Connote.prototype, "actual_weight", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Connote.prototype, "volume_weight", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Connote.prototype, "chargeable_weight", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Connote.prototype, "organization_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "location_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "connote_total_package", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "connote_surcharge_amount", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "connote_sla_day", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "location_name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "location_type", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "source_tariff_db", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "id_source_tariff", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Connote.prototype, "pod", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Connote.prototype, "history", void 0);
Connote = __decorate([
    mongoose_1.Schema({ timestamps: true })
], Connote);
exports.Connote = Connote;
exports.ConnoteSchema = mongoose_1.SchemaFactory.createForClass(Connote);
//# sourceMappingURL=connote.schema.js.map