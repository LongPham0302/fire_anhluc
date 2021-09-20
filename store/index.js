import Vue from 'vue'
import Vuex from 'vuex'
import database from '../src/config/firebaseConfig'


Vue.use(Vuex);

const store = new Vuex.Store({

    actions: {
        async createTask({ commit }, data) {
            try {
                await database.ref("task").set(data);
                commit()
            } catch (e) {
                return {
                    ok: false,
                    error: e.message
                }
            }
        },
    }
});
export default store;