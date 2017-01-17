//import {IContact} from '../../core/data-stores/models/contact.i';
import {ICountryService} from '../../core/data-stores/country.service.i';
import {ICountry} from '../../core/models/country.i';

class ContactDetailsController {
    private toolBarTitle: string;
    static $inject = [
        '$mdDialog', 'CountryService'
    ];

    constructor(private $mdDialog: any,
                private CountryService: ICountryService,
                private contact?: any
    ) {
        this.toolBarTitle = (!angular.isDefined(contact)) ? 'Add a new contact' : 'Edit a contact';
    }

    getCountries(): Array<ICountry> {
        return this.CountryService.getAllCountries();
    }

    save() {
        this.$mdDialog.hide([this.contact, false]);
    }

    cancel() {
        this.$mdDialog.cancel();
    }

    remove() {
        this.$mdDialog.hide([this.contact, true]);
    }
}

export {ContactDetailsController};


