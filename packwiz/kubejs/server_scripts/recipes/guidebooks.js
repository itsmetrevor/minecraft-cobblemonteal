const books = []

ServerEvents.recipes(event => {
    for (const book of books) {
        event.shapeless( book, 'minecraft:apple' )
    }
})