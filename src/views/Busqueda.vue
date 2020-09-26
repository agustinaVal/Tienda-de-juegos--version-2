<template>
	<div>
		<h1 class="titulo__busqueda">Búsqueda de juguetes</h1>
		<input type="text" class="input__busqueda" v-model="producto"  placeholder="Escribe aquí ..."/>
		<ul v-if="check">
			<li v-for="(producto, clave) in productoDisponiblePorId" :key="clave">
				<label class="listado__Busqueda"
					>Nombre: {{ producto.nombre }} | Stock: {{ producto.stock }} | Precio: ${{ producto.precio }}</label
				>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'Busqueda',
	data() {
		return {
			producto: '',
		};
	},
	computed: {
		productoDisponiblePorId() {
			return this.$store.getters.productoDisponiblePorId(this.producto);
		},
		check() {
			return this.productoDisponiblePorId.length > 0 && this.producto !== '';
		},
	},
};
</script>
<style>
.titulo__busqueda{
  padding: 20px;
    color: grey;
    font-size: 50px;
    font-weight: 400;
}
.input__busqueda{
    width: 350px;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
}
.listado__Busqueda {
  text-align: center;
  font-size: 30px;
 list-style: none;
}
</style>
