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
exports.CreateTransaction = void 0;
const swagger_1 = require("@nestjs/swagger");
class CustomerAttribute {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CustomerAttribute.prototype, "nama_sales", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CustomerAttribute.prototype, "TOP", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CustomerAttribute.prototype, "jenis_pelanggan", void 0);
class OriginDestinationData {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], OriginDestinationData.prototype, "customer_name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], OriginDestinationData.prototype, "customer_address", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], OriginDestinationData.prototype, "customer_email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], OriginDestinationData.prototype, "customer_phone", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], OriginDestinationData.prototype, "customer_address_detail", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], OriginDestinationData.prototype, "customer_zip_code", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], OriginDestinationData.prototype, "zone_code", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], OriginDestinationData.prototype, "organization_id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], OriginDestinationData.prototype, "location_id", void 0);
class Koli {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], Koli.prototype, "koli_length", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], Koli.prototype, "koli_chargeable_weight", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], Koli.prototype, "koli_width", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Array)
], Koli.prototype, "koli_surcharge", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], Koli.prototype, "koli_height", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Koli.prototype, "koli_description", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], Koli.prototype, "koli_formula_id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], Koli.prototype, "koli_volume", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], Koli.prototype, "koli_weight", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Object)
], Koli.prototype, "koli_custom_field", void 0);
class CustomField {
}
class CreateTransaction {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateTransaction.prototype, "customer_name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateTransaction.prototype, "customer_code", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateTransaction.prototype, "transaction_amount", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateTransaction.prototype, "transaction_discount", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateTransaction.prototype, "transaction_additional_field", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateTransaction.prototype, "transaction_payment_type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateTransaction.prototype, "transaction_state", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateTransaction.prototype, "transaction_code", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateTransaction.prototype, "transaction_order", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateTransaction.prototype, "location_id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateTransaction.prototype, "organization_id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], CreateTransaction.prototype, "transaction_payment_type_name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateTransaction.prototype, "transaction_cash_amount", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Number)
], CreateTransaction.prototype, "transaction_cash_change", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", CustomerAttribute)
], CreateTransaction.prototype, "customer_attribute", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", OriginDestinationData)
], CreateTransaction.prototype, "origin_data", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", OriginDestinationData)
], CreateTransaction.prototype, "destination_data", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => [Koli] }),
    __metadata("design:type", Array)
], CreateTransaction.prototype, "koli_data", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", CustomField)
], CreateTransaction.prototype, "custom_field", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", CustomField)
], CreateTransaction.prototype, "currentLocation", void 0);
exports.CreateTransaction = CreateTransaction;
//# sourceMappingURL=transaction.dto.js.map