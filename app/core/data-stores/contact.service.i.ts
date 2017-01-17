import {IContact} from '../models/contact.i';

interface IContactService {
    getAllContacts(): Array<{key: string, value: IContact}>;
    addNewContact(newContact: IContact): void;
    removeContact(key: string): void;
}

export {IContactService};
