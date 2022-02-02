import Vue from 'vue'
import Router from "vue-router";
import Logo from "@/components/Logo";
import LandingPage from "@/components/LandingPage";
import addMovie from "@/components/AddMovie";


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: LandingPage },
        { path: '/addmovie', component: addMovie },
        { path: '/logo', component: Logo },
    ]
})