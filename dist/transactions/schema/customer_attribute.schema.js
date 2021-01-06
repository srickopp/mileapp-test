"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAttributeSchema = void 0;
const mongoose = require("mongoose");
exports.CustomerAttributeSchema = new mongoose.Schema({
    nama_sales: String,
    TOP: String,
    Jenis_Pelanggan: String
}, {
    _id: false
});
//# sourceMappingURL=customer_attribute.schema.js.map