import {contactComponent} from './contact/contact.component';
import {contactListComponent} from './contact-list/contact-list.component';

import 'angular-material';
import 'angular-messages';

let componentsModule: ng.IModule = angular.module('tsAddressBook.components', ['ngMaterial', 'ngMessages'])
    .component('contact', contactComponent)
    .component('contactList', contactListComponent);

export {componentsModule};
