import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		juguetes: [{
				id: '001',
				nombre: 'seiko',
				stock: 100,
				precio: 30000,
				fecha: new Date() 
			},
			{
				id: '002',
				nombre: 'fifa 21',
				stock: 100,
				precio: 25000,
				fecha: new Date() 
			},
			{
				id: '003',
				nombre: 'gears of war 4',
				stock: 100,
				precio: 15000,
				fecha: new Date() 
			},
			{
				id: '004',
				nombre: 'mario tennis aces',
				stock: 100,
				precio: 35000,
				fecha: new Date() 
			},
			{
				id: '005',
				nombre: 'bloodborne',
				stock: 100,
				precio: 10000,
				fecha: new Date() 
			},
			{
				id: '006',
				nombre: 'forza horizon 4',
				stock: 100,
				precio: 2000,
				fecha: new Date() 
			},
		],
		historialDeVentas: [],
	  },
	  getters: {
		productosConStock: (state) => {
		  return state.juguetes.filter((producto) => {
			return producto.stock > 0
		  })
		},
		productoDisponiblePorId: (state, getters) => (producto) => {
		  return getters.productosConStock.filter((p) => p.id == producto || p.nombre.toLowerCase().includes(producto.toLowerCase()))
		},
	  },
	  mutations: {
		DESCONTAR(state, newJuguetes) {
		  state.juguetes = newJuguetes
		},
		REGISTRO(state, newHistorial) {
		  state.historialDeVentas = newHistorial
		},
	  },
	  actions: {
		descontar({ commit, state, dispatch }, payload) {
		  let registro
		  let newJuguetes = state.juguetes.map((e) => {
			if (e.id == payload.trim()) {
			  e.stock--
			  registro = e
			}
			return e
		  })
		  commit('DESCONTAR', newJuguetes)
		  console.log(registro)
		  dispatch('registro', registro)
		},
		registro({ commit, state }, registro) {
		  registro.fecha = new Date()
		  let historial = state.historialDeVentas
		  historial.push(registro)
		  let newHistorial = historial
		  commit('REGISTRO', newHistorial)
		},
	  },
	
	  modules: {},
	})