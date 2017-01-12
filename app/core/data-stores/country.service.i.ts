import {ICountry} from './models/country.i';

interface ICountryService {
    getAllCountries(): Array<ICountry>;
}

export {ICountryService};
