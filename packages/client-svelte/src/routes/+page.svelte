<script>
import { trpc } from '$lib/trpc/client'
import { fly } from 'svelte/transition'

let loading = false

async function fetch() {
    console.log('fetch')
    loading = true
    const res = await trpc().getUserById.query({
        id: '0160418c-83cd-411d-8bb9-068a123bab3b',
    })
    loading = false
    return res
}

let player = fetch()
</script>

<div class='flex flex-col items-center justify-center h-screen'>
    <h1 class='text-3xl font-bold underline text-blue-500'>
        Hello
    </h1>

    <div class='flex items-center justify-center h-32'>
    {#await player}
        <p>...waiting</p>
    {:then { player }}
        {#if player}
            <div in:fly='{({ y: 200, duration: 200 })}' class='w-full max-w-xl mx-auto bg-gray-50 rounded-lg my-8 p-4'>
                <pre class='text-sm'>{JSON.stringify(player)}</pre>
            </div>
        {/if}
    {:catch error}
        <p style='color: red'>{error.message}</p>
    {/await}
    </div>

    <button disabled={loading}
            on:click={fetch}
            class='bg-blue-900 text-blue-50 rounded-lg py-2 px-4 font-semibold disabled:bg-gray-800'>
        {loading ? 'Fetching' : 'Fetch'}
    </button>
</div>
