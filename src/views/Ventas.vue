<template>
	<div class="ventas">
		<div>
			<h1 class="titulo__ventas">Listado de ventas</h1>
		</div>
		<div class="container py-5">
			<b-table striped hover :items="historialDeVentas"></b-table>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Ventas",
  computed: {
    ...mapState(["historialDeVentas"]),
  },
};
</script>

<style>
.titulo__ventas {
	padding: 20px;
	color: grey;
	font-size: 50px;
	font-weight: 400;
}
</style>
