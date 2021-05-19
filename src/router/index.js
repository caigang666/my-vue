import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from "@/components/login.vue"
import reg from "@/components/reg.vue"
import main from "@/components/bodyer.vue";
import header from "@/components/header.vue";
import lefter from "@/components/lefter.vue";
import stuinfo from "@/components/stuinfo.vue";
import grand from "../components/grand.vue";
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: grand,
    components: {
      //default: header,
      //left: lefter,
      main: main
    },
    children: [/* {
        path: "stuinfo/:studentall",
        name: "stuinfo",
        components: {
          stu: stuinfo
        }
      }, */
      {
        path: "grand",
        name: "grand",
        components: {
          stu: grand
        }

      }
    ]
  }],

});
