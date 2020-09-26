<template>
	<div id="app">
		<div id="nav">
			<router-link v-b-tooltip.hover title="Pagina principal" :to="{ name: 'Inicio' }">INICIO</router-link>
			<router-link v-b-tooltip.hover title="Pagina de búsqueda" :to="{ name: 'Busqueda' }">BÚSQUEDA</router-link>
			<router-link v-b-tooltip.hover title="Pagina de ventas" :to="{ name: 'Ventas' }">VENTAS</router-link>
			<router-link v-b-tooltip.hover title="Pagina de inventario" :to="{ name: 'Inventario' }"
				>INVENTARIO</router-link
			>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
	text-align: right;

	a {
		font-weight: bold;
		padding: 5px;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
