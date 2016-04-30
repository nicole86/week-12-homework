var prompt = require('prompt');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'Bamazon'
});
 
connection.connect();
 
connection.query('SELECT * FROM products', function(err, rows, fields) {
  if (err) throw err;
 
  for (var i = 0; i < rows.length; i++) {
  	var str = 
  	console.log(rows[i]);

  };

});
 
connection.end();