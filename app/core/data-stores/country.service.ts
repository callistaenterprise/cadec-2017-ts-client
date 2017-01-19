import {ICountryService} from './country.service.i';
import {ICountry} from '../models/country.i';

class CountryService implements ICountryService {
    private countries: Array<ICountry> = [];

    static $inject = [
        '$http'
    ];

    constructor(private $http: ng.IHttpService) {
        $http.get('../../data/country.json', {cache: true}).then((resp: any) => {
            this.countries = resp.data;
        });

    }

    getAllCountries(): Array<ICountry> {
        return this.countries;
    }
}

export {CountryService};
