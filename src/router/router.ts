import {createRouter, createWebHistory} from "vue-router";
import Index from "../components/screens/Index.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {name: "index", path: "/", component: Index}
    ]
})

export default router;