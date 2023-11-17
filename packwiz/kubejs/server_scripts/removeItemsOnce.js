const items = [
    'mca:book_rose_gold',
    'mca:book_romance'
];

items.forEach(item => {
    PlayerEvents.inventoryChanged(item, event => {
        if (event.player.stages.has(`removeOnce:${item}`)) return;
        event.player.stages.add(`removeOnce:${item}`);
        event.player.inventory.clear(event.item);
    });
});