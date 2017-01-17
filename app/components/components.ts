import {contactDetailsComponent} from './contact-details/contact-details.component';
import {contactListComponent} from './contact-list/contact-list.component';

import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';


let componentsModule: ng.IModule = angular.module('tsAddressBook.components', ['ngAnimate', 'ngAria', 'ngMessages', 'ngMaterial'])
    .component('contactList', contactListComponent)
    .component('contactDetails', contactDetailsComponent);

export {componentsModule};
