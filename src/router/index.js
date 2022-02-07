import Vue from 'vue'
import Router from "vue-router";
import LandingPage from "@/components/LandingPage";
import Movies from "@/components/Movies";
import AddMovie from "@/components/AddMovie";
import AboutUs from "@/components/AboutUs";

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: LandingPage },
        { path: '/addMovie', component: AddMovie },
        { path: '/movies', component: Movies },
        { path: '/aboutUs', component: AboutUs },

    ]
})
