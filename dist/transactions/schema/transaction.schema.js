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
exports.TransactionSchema = exports.Transaction = exports.Koli = exports.OriginDestinationData = exports.CustomerAttribute = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const connote_schema_1 = require("./connote.schema");
class CustomerAttribute {
}
exports.CustomerAttribute = CustomerAttribute;
class OriginDestinationData {
}
exports.OriginDestinationData = OriginDestinationData;
class Koli {
}
exports.Koli = Koli;
class CustomField {
}
let Transaction = class Transaction {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Transaction.prototype, "transaction_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Transaction.prototype, "customer_name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Transaction.prototype, "customer_code", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Transaction.prototype, "transaction_amount", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Transaction.prototype, "transaction_discount", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Transaction.prototype, "transaction_additional_field", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Transaction.prototype, "transaction_payment_type", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Transaction.prototype, "transaction_state", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Transaction.prototype, "transaction_code", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Transaction.prototype, "transaction_order", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Transaction.prototype, "location_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Transaction.prototype, "organization_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Transaction.prototype, "transaction_payment_type_name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Transaction.prototype, "transaction_cash_amount", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Transaction.prototype, "transaction_cash_change", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", CustomerAttribute)
], Transaction.prototype, "customer_attribute", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Transaction.prototype, "connote_id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", OriginDestinationData)
], Transaction.prototype, "origin_data", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", OriginDestinationData)
], Transaction.prototype, "destination_data", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Transaction.prototype, "koli_data", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", CustomField)
], Transaction.prototype, "custom_field", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", CustomField)
], Transaction.prototype, "currentLocation", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: 'Connote' }),
    __metadata("design:type", connote_schema_1.Connote)
], Transaction.prototype, "connote", void 0);
Transaction = __decorate([
    mongoose_1.Schema({ timestamps: true })
], Transaction);
exports.Transaction = Transaction;
exports.TransactionSchema = mongoose_1.SchemaFactory.createForClass(Transaction);
//# sourceMappingURL=transaction.schema.js.map