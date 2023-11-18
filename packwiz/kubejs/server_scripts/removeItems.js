const onceItems = [

    'mca:book_rose_gold',
    'mca:book_romance'

].forEach(item => {
    PlayerEvents.inventoryChanged(item, event => {
        if (event.player.stages.has(`removeOnce:${item}`)) return
        event.player.stages.add(`removeOnce:${item}`)
        event.player.inventory.clear(event.item)
    })
})


const alwaysItems = [

    'computercraft:turtle_normal',
    'computercraft:turtle_advanced'

].forEach(item => {
    PlayerEvents.inventoryChanged(item, event => {
        event.player.inventory.clear(event.item)
    })
})