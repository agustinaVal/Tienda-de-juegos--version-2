<template>
	<div class="Inventario container px-5">
		<h2 class="titulo">Inventario</h2>
		<b-table striped hover :items="juguetes" :fields="juguetes"></b-table>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'Inventario',
	data() {
		return {
			fields: ['Id', 'Nombre', 'Stock', 'Precio'],
		};
	},
	computed: {
		...mapState(['juguetes']),
	},
};
</script>

<style scoped>
    .titulo {
    padding: 20px;
    color: grey;
    font-size: 50px;
    font-weight: 400;
  }
</style>
