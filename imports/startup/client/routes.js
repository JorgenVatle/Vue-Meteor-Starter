import { RouterFactory } from 'meteor/akryum:vue-router2';

// Vue Components:
import AsMain from '../../ui/layout/AsMain';
import AsLanding from '../../ui/pages/AsLanding';

const routerFactory = new RouterFactory({
    mode: 'history',
});

RouterFactory.configure((factory) => {
    factory.addRoutes([
        {
            path: '/',
            component: AsMain,
            children: [
                {
                    path: '/',
                    name: 'landing',
                    component: AsLanding,
                }
            ]
        }
    ]);
});

export default routerFactory;