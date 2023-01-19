<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-3xl font-bold underline text-blue-500">
            Hello
        </h1>
        <suspense>
            <Player />
        </suspense>
    </div>
</template>

<script setup lang="ts">
import Player from "./components/Player.vue"

//
</script>
