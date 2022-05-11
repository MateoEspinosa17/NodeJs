// Paquete necesario para conectar a bases de datos MySQL.
var mysql = require('mysql');

// Parámetros de conexión a la base de datos.
var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '1234',
	database: 'parcial2_a00823972',
	port: '3305',
});

//Funcion que nos permite comprobar la conexión a la base de datos.
con.connect(function (err) {
	if (err) throw err;
	console.log('Connected!');

	//? INSERT
	var sql =
		"INSERT INTO Alumnos(Nombre, Identificador, Email, Carrera) VALUES('Mateo Espinosa', 'A00823972', 'A00823972@tec.mx', 'ISDR'), ('Luis el Lucho Castillo', 'A012345678','jijija@tec.mx','LAE')";
	con.query(sql, function (err, result) {
		if (err) throw err;
		console.log('1 record inserted');
	});

	//? SELECT
	// con.query('SELECT * FROM Alumnos', function (err, result) {
	// 	if (err) throw err;
	// 	console.log(result);
	// });

	//? UPDATE
	// var sql = "UPDATE Alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 2";
	// con.query(sql, function (err, result) {
	// 	if (err) throw err;
	// 	console.log(result.affectedRows + ' record(s) updated');
	// });

	//? DELETE
	// var sql = "DELETE FROM Alumnos WHERE Nombre = 'BORRAR ALUMNO'";
	// con.query(sql, function (err, result) {
	// 	if (err) throw err;
	// 	console.log('Number of records deleted: ' + result.affectedRows);
	// });
});
