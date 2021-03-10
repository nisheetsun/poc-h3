const h3 = require("h3-js");
var connection = require('../connection');


function getBikes(lat, long, _radius) {
    let radius = _radius*0.0089;
    lat = parseInt(lat);
    long = parseInt(long);
    // let one = lat+2*0.0089;
    // let two = lat-2*0.0089;
    // let three = long+2*0.0089;
    // let four = long-2*0.0089;
    let query_str = `SELECT * FROM locations_old where latitude < ${lat+radius} and latitude > ${lat-radius} and longitude < ${long+radius} and longitude > ${long-radius}`;
    return new Promise((resolve, reject) => {
        connection.query(query_str, null, (err, rows, fields) => {
            // Call reject on error states,
            // call resolve with results
            if (err) {
                return reject(err);
            }
            // console.log("@@@@@@@@", rows.length);
            resolve(rows);
        });
    });
}


exports.bikes = async function (req, res, next) {
    let lat = req.query.lat
    let long = req.query.long
    let radius = req.query.level

    result = await getBikes(lat, long, radius);

    res.send({length:result.length, data:result});
}