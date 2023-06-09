import {createRouter, createWebHashHistory} from "vue-router";
import Index from "../components/screens/Index.vue";
import NoMeta from "../components/screens/NoMeta.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {name: "index", path: "/", component: Index},
        {name: "noMeta", path: "/nometa", component: NoMeta}
    ],
})

export default router;
