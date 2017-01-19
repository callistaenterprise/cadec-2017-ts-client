import {ContactDetailsController as controller} from './contact-details.controller';
let template = <string>require('./contact-details.html');

let contactDetailsComponent: ng.IComponentOptions = {
    controller: controller,
    template: template,
    bindings: {
        contact: '<'
    },
    controllerAs: 'ctrl'
};

export {contactDetailsComponent};
