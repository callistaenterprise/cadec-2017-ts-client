import {CountryService} from './country.service';
import {ContactService} from './contact.service';


let dataStoresModule: ng.IModule = angular.module('tsAddressBook.core.stores', [])
    .service('CountryService', CountryService)
    .service('ContactService', ContactService);


export {dataStoresModule};
