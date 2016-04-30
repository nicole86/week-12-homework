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

 
connection.end();