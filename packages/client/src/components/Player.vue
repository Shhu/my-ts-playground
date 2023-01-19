<template>
    <pre class='bg-gray-50 rounded-lg p-2 text-sm my-8'>{{ player }}</pre>

    <button :disabled='loading'
            @click='fetch'
            class='bg-blue-900 text-blue-50 rounded-lg py-2 px-4 font-semibold disabled:bg-gray-800'>
        {{ loading ? 'Fetching' : 'Fetch' }}
    </button>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import trcp from '../composables/useTrcp'

const loading = ref(false)

async function fetch() {
    loading.value = true
    const { player } = await trcp.getUserById.query({
        id: '0160418c-83cd-411d-8bb9-068a123bab3b',
    })
    loading.value = false
    return player
}

const player = ref(await fetch())
</script>
