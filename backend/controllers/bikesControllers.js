const h3 = require("h3-js");
var connection = require('../connection');


function getBikes(subq) {
    let query_str = `SELECT * FROM locations where ${subq} LIMIT 100`;
    return new Promise((resolve, reject) => {
        connection.query(query_str, null, (err, rows, fields) => {
            // Call reject on error states,
            // call resolve with results
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}


exports.bikes = async function (req, res, next) {
    let lat = req.query.lat
    let long = req.query.long

    let seven = h3.geoToH3(lat, long, req.query.level);
    let six = h3.geoToH3(lat, long, req.query.level);
    let five = h3.geoToH3(lat, long, req.query.level);
    let result_list;
    if (req.query.level == 5) {
        result_list = await getBikes(`hex5='${five}'`);

    } else if (req.query.level == 6) {
        result_list = await getBikes(`hex5='${six}'`);

    } else if (req.query.level == 7) {
        result_list = await getBikes(`hex5='${seven}'`);

    } else {

    }
    console.log(result_list, "################")
    res.send(result_list);
}