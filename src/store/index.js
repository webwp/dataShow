import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import User from './modules/user'

import order from './modules/order'
import orderToday from './modules/orderToday'
import report from './modules/report'

Vue.use(Vuex)


const store = new Vuex.Store({
	modules:{
		app,
		User,
		order,
		orderToday,
		report
	},
	getters
})

export default store