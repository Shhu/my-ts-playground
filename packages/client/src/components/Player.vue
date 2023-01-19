<template>
    <pre class='bg-gray-100 rounded-lg p-2 text-sm my-8'>{{ player }}</pre>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import trcp from '../composables/useTrcp'

const data = await trcp.getUserById.query({
    id: '0160418c-83cd-411d-8bb9-068a123bab3b',
})

const player = ref(data.player)
</script>
