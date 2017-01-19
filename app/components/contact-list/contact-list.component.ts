import {ContactListController as controller} from './contact-list.controller';
let template = <string>require('./contact-list.html');

let contactListComponent: ng.IComponentOptions = {
    controller: controller,
    template: template,
    controllerAs: 'ctrl'
};

export {contactListComponent};
