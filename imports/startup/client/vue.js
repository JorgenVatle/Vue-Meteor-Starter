import { Meteor } from 'meteor/meteor';
import { Vue } from 'meteor/akryum:vue';

import AsApp from '../../ui/AsApp.vue';
import routerFactory from './routes';

Meteor.startup(() => {

    const router = routerFactory.create();

    /**
     * Global Vue Event Bus
     */
    window.events = new Vue();

    /**
     * Core Vue Instance
     */
    new Vue({
        el: '#app',
        render: h => h(AsApp),
        router,
    })

});