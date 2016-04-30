var prompt = require('prompt');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'Bamazon'
});
 
connection.connect();
 
var displayProducts = function() {
    connection.query('SELECT * FROM products', function(err, res) {
        console.log(res);
    });
}
displayProducts();

prompt.get(['What is the ID of the product you would like to buy?', 'How many would you like to buy?'], function(err, result){

});

connection.end();