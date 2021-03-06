const h3 = require("h3-js");

exports.lat_long_to_index = function(lat, long, resolution=7){
    return h3.geoToH3(lat, long, resolution)
}