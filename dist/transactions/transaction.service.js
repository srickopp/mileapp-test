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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const uuid_1 = require("uuid");
const connote_schema_1 = require("./schema/connote.schema");
const transaction_schema_1 = require("./schema/transaction.schema");
let TransactionService = class TransactionService {
    constructor(transactionModel, connoteModel) {
        this.transactionModel = transactionModel;
        this.connoteModel = connoteModel;
    }
    async createTransaction(data) {
        var e_1, _a, e_2, _b;
        let actual_weight = 0;
        let volume_weight = 0;
        let chargeable_weight = 0;
        const awb = await this.createAWB();
        try {
            for (var _c = __asyncValues(data.koli_data), _d; _d = await _c.next(), !_d.done;) {
                let koli = _d.value;
                actual_weight += koli.koli_weight;
                volume_weight += koli.koli_volume;
                chargeable_weight += koli.koli_chargeable_weight;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) await _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        const createMail = new this.transactionModel(data);
        let saved_data = await createMail.save();
        const connote_total_package = data.koli_data.length;
        const create_connote_payload = {
            transaction_id: saved_data._id,
            connote_state: data.transaction_state,
            connote_service_price: data.transaction_amount,
            connote_amount: data.transaction_amount,
            connote_code: awb,
            location_id: data.location_id,
            organization_id: data.organization_id,
            actual_weight: actual_weight,
            volume_weight: volume_weight,
            chargeable_weight: chargeable_weight,
            connote_total_package
        };
        let save_connote = await this.createConnote(create_connote_payload);
        let koli_data = [];
        let index = 0;
        try {
            for (var _e = __asyncValues(data.koli_data), _f; _f = await _e.next(), !_f.done;) {
                let koli = _f.value;
                koli_data.push({
                    koli_length: koli.koli_length,
                    awb_url: `https://tracking.mile.app/label/${awb}.${index}`,
                    created_at: saved_data.createdAt,
                    koli_chargeable_weight: koli.koli_chargeable_weight,
                    koli_width: koli.koli_width,
                    koli_surcharge: koli.koli_surcharge,
                    koli_height: koli.koli_height,
                    updated_at: saved_data.updatedAt,
                    koli_description: koli.koli_description,
                    koli_formula_id: koli.koli_formula_id,
                    connote_id: save_connote._id,
                    koli_volume: koli.koli_volume,
                    koli_weight: koli.koli_weight,
                    koli_id: uuid_1.v4(),
                    koli_custom_field: {
                        awb_sicepat: null,
                        harga_barang: null
                    },
                    koli_code: `${awb}.${index}`
                });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) await _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        await this.transactionModel.updateOne({ _id: saved_data._id }, {
            connote_id: save_connote._id,
            koli_data: koli_data
        });
        return await this.findOne(saved_data._id);
    }
    async createConnote(data) {
        const save_connote = new this.connoteModel({
            connote_number: 1,
            connote_service: 'ECO',
            connote_service_price: data.connote_amount,
            connote_amount: data.connote_amount,
            connote_code: 'AWB00100209082020',
            connote_booking_code: '',
            connote_order: 326931,
            connote_state: data.connote_state,
            connote_state_id: 2,
            zone_code_from: 'CGKFT',
            zone_code_to: 'SMG',
            surcharge_amount: null,
            transaction_id: data.transaction_id,
            actual_weight: data.actual_weight,
            volume_weight: data.volume_weight,
            chargeable_weight: data.chargeable_weight,
            organization_id: data.organization_id,
            location_id: data.location_id,
            connote_total_package: data.connote_total_package,
            connote_surcharge_amount: '0',
            connote_sla_day: '4',
            location_name: 'Hub Jakarta Selatan',
            location_type: 'HUB',
            source_tariff_db: 'tariff_customers',
            id_source_tariff: '1576868',
            pod: null,
            history: []
        });
        return save_connote.save();
    }
    async getAll() {
        var e_3, _a;
        let transaction_data = await this.transactionModel.find();
        if (transaction_data.length > 0) {
            try {
                for (var transaction_data_1 = __asyncValues(transaction_data), transaction_data_1_1; transaction_data_1_1 = await transaction_data_1.next(), !transaction_data_1_1.done;) {
                    let transaction = transaction_data_1_1.value;
                    transaction.connote = await this.connoteModel.findOne({ transaction_id: transaction._id });
                    transaction.connote.connote_id = transaction.connote_id;
                    transaction.transaction_id = transaction._id;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (transaction_data_1_1 && !transaction_data_1_1.done && (_a = transaction_data_1.return)) await _a.call(transaction_data_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return transaction_data;
    }
    async findOne(id) {
        let connote_data = await this.connoteModel.findOne({
            transaction_id: id
        });
        connote_data.connote_id = connote_data._id;
        delete connote_data._id;
        delete connote_data.__v;
        let transaction_data = await this.transactionModel.findOne({ _id: id }).populate(connote_schema_1.Connote.name);
        transaction_data.transaction_id = transaction_data._id;
        transaction_data.connote = connote_data;
        delete transaction_data._id;
        delete transaction_data.__v;
        return transaction_data;
    }
    async createAWB() {
        const time = new Date();
        return 'AWB' + time.getTime();
    }
};
TransactionService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(transaction_schema_1.Transaction.name)),
    __param(1, mongoose_1.InjectModel(connote_schema_1.Connote.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map