import {ICacheService} from '../../core/cache/cache.service.i';

class ContactListController {
    private contacts = [];
    static $inject = [
        '$mdDialog', 'CacheService'
    ];

    constructor(private $mdDialog: any,
                private CacheService: ICacheService) {
        console.log('ListController initialized');
    }

    getContacts(): Array<any> {
        return this.contacts;
    }

    addNewContact(ev) {
        this.$mdDialog.show({
            //controller: 'ContactController as ctrl',
            template: '<contact user=\"sedina\"></contact>',
            parent: angular.element(document.body),
            locals: {
                contact: 'hej'
            },
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: false
        })
            .then((answer) => {
                console.log('got answer from child dialog ...');
                var contact = answer[0];
                this.CacheService.add(contact);
                // TODO must add getAll
                // this.contacts = this.StoragaService.getAll();
            });
    }

    editContact(ev, key, contact) {
        this.$mdDialog.show({
            controller: 'ContactController as ctrl',
            locals: {
                contact: angular.copy(contact)
            },
            template: '<contact></contact>',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: false
        }).then((answer) => {
            var updatedContact = answer[0],
                remove = answer[1];
            if (remove) {
                this.CacheService.remove(key);
            } else {
                this.CacheService.update(key, updatedContact);
            }
            // TODO must add getAll
            //this.contacts = this.CacheService.getAll();
        });
    }
}

export {ContactListController};
