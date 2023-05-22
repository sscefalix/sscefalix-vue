<script setup lang="ts">
import {useConfig} from "../../stores/config.ts";
import Header from "./components/Header.vue";

const {darkTheme} = useConfig()
</script>

<template>
    <div id="layout" :class="darkTheme ? 'dark' : undefined">
        <Header />
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>

#layout {
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    padding: 0 12px;
    overflow: hidden;

    --bg: #f6f6f9;
    --color: #000;
}
#layout.dark {
    --bg: #161616;
    --color: aliceblue;
    --color-reverse: #000;
    --card: #1e1d26;
}
#layout {
    background-color: var(--bg);
    color: var(--color);
}
.container {
    padding-top: 100px;
}
</style>