<script setup lang="ts">

</script>

<template>
    <header class="header">
      <div class="container">
        <router-link class="logo" to="/">
          <img src="/avatar.png" alt="" class="logo__img">
          <h4 class="logo__name">sscefalix</h4>
        </router-link>
        <div class="links">
          <router-link to="https://discord.com/users/811210156884754472"><i class="fa-brands fa-discord"></i></router-link>
          <router-link to="https://t.me/sscefalix"><i class="fa-brands fa-telegram"></i></router-link>
        </div>
      </div>
    </header>
</template>

<style scoped>
.header {
    position: fixed;
    right: 0;
    top: 0;
    background-color: var(--bg);
    padding: 16px 12px;
    width: 100%;
    height: fit-content;
}
.header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 8px;
}
.logo__img {
    height: 50px;
    border-radius: 50%;
}
.logo__name {
    font-size: 18px;
    font-weight: 500;
    color: var(--color);
}

.links {
    display: flex;
    align-items: center;
    gap: 8px;
}
.links a {
    text-decoration: none;
}
.links a i {
    color: lightgray;
    font-size: 20px;
}
</style>