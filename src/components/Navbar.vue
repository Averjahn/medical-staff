<template>
<nav class="bg-blue-600 p-4">
    <div class="container mx-auto flex justify-between">
        <h1 class="text-white text-2xl font-bold">Учет работников медучреждения</h1>
        <div class="ml-4 mt-1">
            <router-link to="/doctors" class="text-white px-4 py-4 mr-2 hover:bg-blue-300 rounded">Врачи</router-link>
            <router-link to="/nurses" class="text-white px-4 py-4 hover:bg-blue-300 rounded">Медсестры</router-link>
        </div>
    </div>
</nav>
</template>

<script setup>
</script>

<style scoped>
</style>