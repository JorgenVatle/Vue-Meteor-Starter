import { Meteor } from 'meteor/meteor';
import VueMeteorTracker from 'vue-meteor-tracker';
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import AsApp from '../../ui/AsApp.vue';
import routerFactory from './routes';

Meteor.startup(() => {

    /**
     * Vue-Meteor-Tracker
     * @link https://github.com/meteor-vue/vue-meteor-tracker
     */
    Vue.use(VueMeteorTracker);

    /**
     * Buefy
     * @link https://buefy.github.io/#/
     */
    Vue.use(Buefy);

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
        router: routerFactory.create(),
    })

});