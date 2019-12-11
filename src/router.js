import Vue from 'vue'
import VueRouter from 'vue-router'
import TestFirst from "./components/FunctionPages/TestFirst.vue";
import TestFirst_1 from "./components/FunctionPages/TestFirst-1.vue";


Vue.use(VueRouter)

const routes = [
    {
      path: '/TestFirst',
      name:'TestFirst',
      component: TestFirst,
      children: [
        {
          path: 'TestFirst-1',
          component: TestFirst_1
        },
      ]
    }
  ]

  const router = new VueRouter({
    routes
  })


  export default router