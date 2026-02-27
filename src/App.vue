<script setup>
import AppHeader from './components/layout/AppHeader.vue';
</script>

<template>
 <AppHeader title="Detalhes" show-back @back="router.back()" />
 <RouterView/>
</template>

<style>
@import './assets/css/global.css'
</style>
