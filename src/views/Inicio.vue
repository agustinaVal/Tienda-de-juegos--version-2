<template>
	<div class="container" id="Home">
		<h1 class="py-2 titulo__home ">Juguetelandia</h1>
		<h2 class="titulo__home2">Juegos de PC y consolas</h2>
		<label class="label">ID:</label>
		<b-form-input class="input-compra" v-model="id" placeholder="Codigo del producto"></b-form-input>

		<label class="label">Nombre:</label>
		<b-form-input
			class="input-compra"
			:disabled="true"
			v-model="juguete.nombre"
			placeholder="Nombre"
		></b-form-input>

		<label class="label">Precio:</label>
		<b-form-input
			class="input-compra"
			:disabled="true"
			v-model="juguete.precio"
			placeholder="Precio"
		></b-form-input>

		<label class="label">Stock:</label>
		<b-form-input class="input-compra" :disabled="true" v-model="juguete.stock" placeholder="Stock"></b-form-input>
		<b-button type="submit" @click="Descontar" variant="outline-danger" class="btnComprar my-4">Comprar</b-button>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'Inicio',
	methods: {
		Descontar() {
			this.$store.dispatch('descontar', this.id);
		},
	},
	data() {
		return {
			id: '',
		};
	},
	components: {},
	computed: {
		...mapState(['juguetes']),
		juguete() {
			let juguete = {
				nombre: '',
				precio: '',
				stock: '',
			};
			return this.juguetes.find((j) => j.id == this.id) || juguete;
		},
	},
};
</script>

<style>
#Home {
	background: url('https://www.diverti.cl/img/cms/Juegos-de-mesa-banner-piezas.jpg');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}
.label {
	display: block;
	text-align: left;
	color: white;
	font-weight: bold;
}
.titulo__home {
	padding: 20px;
	font-size: 100px;
	font-weight: 700;
	color: #f1f3f8;
}
.titulo__home2 {
	padding: 20px;
	font-size: 50px;
	font-weight: 400;
	color: #f1f3f8;
}
</style>
