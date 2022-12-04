interface Listener {
    name: string
    symbol?: symbol
    triggered?: number
    callback: () => void
}

const eventNames = {
    'player.levelup': [] as Listener[],
    'battle.victory': [] as Listener[],
    'battle.deafeat': [] as Listener[],
}

export type EventName = keyof typeof eventNames

export default () => {
    async function fire(name: EventName) {
        await eventNames[name].forEach(event => event.callback())
    }

    function subscribe(name: EventName, callback: () => void): symbol {
        const event = { name, callback, symbol: Symbol() }
        eventNames[name].push(event)

        return event.symbol
    }

    function unsubscribe(name: EventName, symbol: symbol) {
        eventNames[name] = eventNames[name].filter(event => event.symbol !== symbol)
    }

    return { fire, subscribe, unsubscribe }
}
