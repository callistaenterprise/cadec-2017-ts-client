import {IContactService} from './contact.service.i';
import {IContact} from '../models/contact.i';
import {ICacheService} from '../cache/cache.service.i';

class ContactService implements IContactService {

    static $inject = [
        'CacheService'
    ];

    constructor(private CacheService: ICacheService) {

    }

    removeContact(key: string): void {
        this.CacheService.remove(key);
    }

    addNewContact(newContact: IContact): void {
        this.CacheService.add(newContact, 'contacts');
    }

    getAllContacts(): Array<{key: string, value: IContact}> {
        return this.CacheService.getAllByPrefix<IContact>('contact');
    }
}

export {ContactService};
