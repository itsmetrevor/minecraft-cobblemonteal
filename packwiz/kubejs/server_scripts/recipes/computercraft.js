ServerEvents.recipes(event => {

    event.remove([
        { output: 'computercraft:turtle_normal' },
        { output: 'computercraft:turtle_advanced'}
    ])

})