import {ContactController as controller} from './contact.controller';
let template = <string>require('./contact.html');

let contactComponent: ng.IComponentOptions = {
    controller: controller,
    template: template,
    bindings: {
        contact: '<'
    },
    controllerAs: 'ctrl'
};

export {contactComponent};
