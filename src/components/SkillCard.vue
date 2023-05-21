<script setup lang="ts">
defineProps<{
    progress: number,
    progressColor: string,
    name: string,
    icon: string,
    iconColor: string
}>()
</script>

<template>
    <div class="skill-card">
        <div class="progress">
            <div class="progress__text">{{progress}}/100 %</div>
            <div class="progress__inner" :style="{width: `${progress}%`, background: progressColor}"></div>
        </div>
        <div class="info">
            <div class="name">{{name}}</div>
            <div class="icon" :style="{color: iconColor}"><i :class="icon"></i></div>
        </div>
    </div>
</template>

<style scoped>
.skill-card {
    display: flex;
    align-items: center;
    gap: 20px;
}
.progress {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 80%;
    width: 100%;
    height: 40px;
    border-radius: 12px;
    background-color: var(--card);
    overflow: hidden;
}
.progress__text {
    z-index: 200;
    text-align: center;
}
.progress__inner {
    position: absolute;
    left: 0;
    height: 100%;
}
.info {
    max-width: 180px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
    background-color: var(--card);
    padding: 16px;
    border-radius: 12px;
}
.info i {
    font-size: 48px;
}
.name {
    font-size: 18px;
    font-weight: 600;
}
</style>