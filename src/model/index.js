var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
import {config} from '../services/config';
var db = {};

var sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, config.db);

fs
	.readdirSync(__dirname)
	.filter(file => {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
	})
	.forEach(file => {
		var model = sequelize['import'](path.join(__dirname, file));
		db[model.name] = model;
	});
	

//Add foreign key and target key for all tables
db.tb_curator.hasMany(db.tb_curator_address,{as : 'CuratorAddress',foreignKey : 'tbCuratorID',targetKey : 'CuratorID'});
db.tb_curator.hasMany(db.tb_curator_products,{as : 'CuratorProduct',foreignKey : 'tbCuratorID',targetKey : 'CuratorID'});
db.tb_curator_products.hasMany(db.tb_curator_product_variants, {as : 'CuratorProductVariant',foreignKey : 'tbCuratorProductID',targetKey : 'CuratorProductID'});

db.tb_curator_products.hasMany(db.tb_curator_product_reviews, {as : 'CuratorProductReview',foreignKey : 'tbCuratorProductID',targetKey : 'CuratorProductID'});
db.tb_curator_products.hasMany(db.tb_curator_product_tags, {as : 'CuratorProductTag',foreignKey : 'tbCuratorProductID',targetKey : 'CuratorProductID'});
db.tb_curator_products.hasMany(db.tb_curator_products_gallery, {as : 'CuratorProductImage',foreignKey : 'tbCuratorProductID',targetKey : 'CuratorProductID'});
db.tb_curator_products.hasMany(db.tb_curator_product_categories, {as : 'CuratorProductCategory',foreignKey : 'tbCuratorProductID',targetKey : 'CuratorProductID'});
db.tb_curator.hasMany(db.tb_coupons, {as : 'Coupons',foreignKey : 'tbCuratorID',targetKey : 'CuratorID'});
db.tb_label.hasMany(db.tb_label_products,{as : 'LabelProduct',foreignKey : 'tbLabelID',targetKey : 'LabelID'});
db.tb_label.hasMany(db.tb_coupons,{as : 'LabelCoupon',foreignKey : 'tbLabelID',targetKey : 'LabelID'});
db.tb_label.hasMany(db.tb_sizes,{as : 'LabelSize',foreignKey : 'tbLabelID',targetKey : 'LabelID'} );
db.tb_label_products.hasMany(db.tb_curator_products ,{as : 'LabelCurator',foreignKey : 'tbLabelProductID',targetKey : 'LabelProductID'});
db.tb_label_products.hasMany(db.tb_label_product_variants ,{as: 'LabelProductVariant',foreignKey : 'tbLabelProductID',targetKey : 'LabelProductID'});
// db.tb_label_products.hasMany(db.tb_label_product_reviews ,{as: 'LabelProductReview'});
// db.tb_label_products.hasMany(db.tb_label_product_tags ,{as: 'LabelProductTag'});
db.tb_label_products.hasMany(db.tb_label_product_categories, {as : 'LabelProductCategory',foreignKey : 'tbLabelProductID',targetKey : 'LabelProductID'});
db.tb_label_products.hasMany(db.tb_label_products_gallery ,{as: 'LabelProductImage',foreignKey : 'tbLabelProductID',targetKey : 'LabelProductID'});
db.tb_orders.hasMany(db.tb_refunds, {as : 'Refund',foreignKey : 'tbOrderID',targetKey : 'OrderID'});
db.tb_orders.hasMany(db.tb_order_lines, {as : 'OrderItem',foreignKey : 'tbOrderID',targetKey : 'OrderID'});
db.tb_curator_products.hasMany(db.tb_order_lines, {as : 'CuratorProductOrder',foreignKey : 'tbCuratorProductID',targetKey : 'CuratorProductID'});
db.tb_curator_product_variants.hasMany(db.tb_order_lines , {as : 'CuratorProductVariantOrder',foreignKey : 'tbCuratorVariantID',targetKey : 'CuratorVariantID'});

db.tb_carts.belongsTo(db.tb_users,{foreignKey : 'userID',targetKey : 'UserID'});
db.tb_carts.hasMany(db.tb_cart_lines,{as :'CartItem',foreignKey : 'cartID',targetKey : 'CartID'});
db.tb_cart_lines.belongsTo(db.tb_curator_products,{as: 'Product',foreignKey : 'productID',targetKey : 'CuratorProductID'});
db.tb_cart_lines.belongsTo(db.tb_curator_product_variants,{as : 'ProductVariant',foreignKey : 'productVariantID',targetKey : 'CuratorVariantID'});

db.tb_orders.belongsTo(db.tb_transactions, {as : 'Transaction'});
db.tb_orders.belongsTo(db.tb_shipment, {as : 'Shipment'});
// db.tb_curator_product_categories.hasMany(db.tb_curator_product_tags, {as : 'Tags'});
db.tb_shipment.hasMany(db.tb_shipment_lines , {as : 'ShipmentLine'});
db.tb_users.hasMany(db.tb_user_address , {as : 'Address'});
db.tb_users.hasMany(db.tb_orders , {as : 'Order'});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.sequelize.sync({ force: true });
// let userdata = {
// 	'UserID' : 1,
// 	'FirstName' : 'Anoop',
// 	'LastName' : 'Chandra',
// 	'UserEmail' : 'test@example.com', 
// 	'UserPassHash' : '2233',
// 	'PhoneNum' : '92320392039',
// 	'Gender' : 'male',
// 	'tb_user_addresses' : [{
// 		'AddressID' : 1,
// 		'AddressLine1' : 'asdkasl',
// 		'AddressLine2' : 'sdasd',
// 		'FullAddress' : 'sadasjdkasjdk',
// 		'District' :'Mysore',
// 		'City' : 'Mysore',
// 		'State' : 'Karnataka', 
// 		'PinCode' : '570009'
// 	}]
// };
// db.tb_users.create(userdata,{
// 	include : [db.tb_user_address]
// }).then(function(data){
// 	console.log('done');
// 	console.log(data);
// });
module.exports = db;