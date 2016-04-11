var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProjectQuantitySchema   = new Schema({
    product_id: String,
    quantity_onhand: Number
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('ProjectQuantity', ProjectQuantitySchema);
