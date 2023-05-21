<script setup lang="ts">

defineProps<{
    value: string,
    name: string,
    background: string,
    color: string
}>()

</script>

<template>
    <div class="info-card" :style="{background: background}">
      <p class="value" :style="{color: color}">{{value}}</p>
      <h4 class="name" :style="{color: color}">{{name}}</h4>
    </div>
</template>

<style scoped>
.info-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    min-width: 200px;
    min-height: 140px;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    transition: transform .3s;
}
.info-card:hover {
    transform: scale(1.02);
}
.value {
    cursor: default;
    font-size: 28px;
    font-weight: 700;
}
.name {
    cursor: default;
    font-size: 16px;
    font-weight: 600;
}
</style>