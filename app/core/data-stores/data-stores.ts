import {CountryService} from './country.service';

let dataStoresModule: ng.IModule = angular.module('tsAddressBook.core.stores', [])
    .service('CountryService', CountryService);

export {dataStoresModule};
