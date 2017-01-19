import {IContactService} from '../../core/data-stores/contact.service.i';
import {IContact} from '../../core/models/contact.i';

class ContactListController {
    private contacts: Array<{key: string, value: IContact}>;

    static $inject = [
        '$mdDialog', 'ContactService'
    ];

    constructor(private $mdDialog: any,
                private ContactService: IContactService) {
        console.log('ListController initialized');
        this.contacts = this.getContacts();
    }

    private getContacts(): Array<{key: string, value: IContact}> {
        return this.ContactService.getAllContacts();
    }

    addNewContact(ev) {
        this.$mdDialog.show({
            template: '<contact-details></contact-details>',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: false
        })
            .then((answer) => {
                let newContact: IContact = answer[0];
                this.ContactService.addNewContact(newContact);
                this.contacts = this.getContacts();
            });
    }

    removeContact(key) {
        this.ContactService.removeContact(key);
        this.contacts = this.getContacts();
    }
}

export {ContactListController};
