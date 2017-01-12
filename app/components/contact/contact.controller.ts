//import {IContact} from '../../core/data-stores/models/contact.i';
import {ICountryService} from '../../core/data-stores/country.service.i';
import {ICountry} from '../../core/data-stores/models/country.i';

class ContactController {
    private toolBarTitle: string;
    private contact: any;
    static $inject = [
        '$mdDialog', 'CountryService'
    ];

    constructor(private $mdDialog: any,
                private CountryService: ICountryService,
                private user?: any) {
        this.toolBarTitle = (angular.equals({}, user) || !angular.isDefined(user)) ? 'Add a new contact' : 'Edit a contact';
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

export {ContactController};


