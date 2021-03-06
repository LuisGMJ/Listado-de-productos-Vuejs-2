import Vue from 'vue';
import vuex from 'vuex';


Vue.use(vuex);

import productsModule from '../modules/products';

export default new vuex.Store({
    modules: {
        products: productsModule
    }
});