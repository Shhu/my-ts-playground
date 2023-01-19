<script>
import { trpc } from '$lib/trpc/client'
import { fly } from 'svelte/transition'

async function fetch() {
    return await trpc().getUserById.query({
        id: '0160418c-83cd-411d-8bb9-068a123bab3b',
    })
}

let player = fetch()
</script>

<div class='flex flex-col items-center justify-center h-screen'>
    <h1 class='text-3xl font-bold underline text-blue-500'>
        Hello
    </h1>
    {#await player}
        <p>...waiting</p>
    {:then { player }}
        {#if player}
            <div in:fly='{({ y: 200, duration: 200 })}' class='w-full max-w-xl mx-auto bg-gray-100 rounded-lg my-8 p-4'>
                <pre class='text-sm'>{JSON.stringify(player)}</pre>
            </div>
        {/if}
    {:catch error}
        <p style='color: red'>{error.message}</p>
    {/await}
</div>
