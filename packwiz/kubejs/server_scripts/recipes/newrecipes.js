ServerEvents.recipes(event => {

    event.shaped('minecraft:bell', [
        'STS',
        'SGS',
        'S S'
    ], {
        S: 'minecraft:stone',
        T: 'minecraft:stick',
        G: 'minecraft:gold_ingot'
    })

    event.shaped('minecraft:saddle', [
        'LLL',
        'LLL',
        'L L'
    ], {
        L: 'minecraft:leather'
    })

})