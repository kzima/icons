// docs component handles routing and demo pages
import {vsDocsPages, vsDocsDrawer} from 'vuestrap-docs/src/components'
import {offcanvasWrapper as vsOffcanvasWrapper, offcanvasDrawer as vsOffcanvasDrawer} from 'gritcode-components/src/components/offcanvas-drawer'

// import utils
import {getRoutes} from 'vuestrap-docs/src/utils'

// import demo pages compatibile with docs component
import docsRoutes from 'src/docs'

// import package.json meta data
import pkg from 'package.json'

// get list of the route objects
const routes = getRoutes(docsRoutes)

// create components from routes and attach it to the docs.components object
routes.forEach((route) => {
	vsDocsPages.components[route.id] = route.component
})

Vue.mixin({
	vuestrapIconsPath: 'assets/icons.min.svg',
})

// start docs instance
window.docs = new Vue({
	el: '#docs',
	data: {
		routes: routes,
		pkg: pkg,
		pageTitle: 'Vuestrap Docs',
	},
	components: {
		vsDocsPages,
		vsDocsDrawer,
		vsOffcanvasDrawer,
		vsOffcanvasWrapper,
	},
})

