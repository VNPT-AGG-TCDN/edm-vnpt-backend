const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('User');
// Define collection and schema
let Domain = new Schema({
    id: {
        type: String
    },
    status: String,
    loaiDomain: String,
    // am: {
    //     _id: String,
    //     userCode: String,
    //     unitCode: String,
    //     userName: String,
    // },
    am: { type: User.schema },
    comTaxCode: {
        type: String
    },
    comName: {
        type: String
    },
    registrationDate: {
        type: Date
    },
    expirationDate: Date,
    incomeDate: Date,
    income: Number,
    domain: String,
    extend: [{
        _id: String,
        numberOfExtend: String,
        fromDate: Date,
        toDate: Date,
        incomeDate: Date,
        income: Number,
        remark: String,
        am: { type: User.schema },
        
    }],
    cancelDate: {
        type: Date
    },
    remark: {
        type: String
    },
}, {
    collection: 'domain'
})

module.exports = mongoose.model('Domain', Domain)