const avoidEmptyCity = function(a) {
    return Object.assign({}, a, { city: a.city || '-'});
}

class AirportsService {
    constructor(airports){
        this._airports = airports;
    }

    getAll(){
        //  update this line to sort the aiport name AB#174
        return this._airports.filter(a => a.code).map(avoidEmptyCity);
    }

    getByCode(code) {
        return avoidEmptyCity(this._airports.find(a => a.code == code));
    }
}

module.exports = AirportsService;