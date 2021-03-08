var mysql = require('mysql')
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: 'internet',
  password: 'password',
  database: 'yulu'
})

connection.connect()

module.exports = connection
// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()