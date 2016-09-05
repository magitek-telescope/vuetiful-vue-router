const Vue = require("vue");
const VueRouter = require("vue-router");
Vue.use(VueRouter);

const App = Vue.extend({});
const router = new VueRouter();
const Components = {};
const getComponents = c => Object.assign(c, {"components": Components});

// Components require here.

Components["Btn"] = require("./components/Btn.vue");
Components["Paragraph"] = require("./components/Paragraph.vue");

// Pages require here.

const Index = Vue.extend(getComponents(require("./pages/index.vue")));

// Routing

router.map({
	"/": {
		component: Index
	}
});

router.start(App, "#app");