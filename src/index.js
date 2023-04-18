import Alpine from 'alpinejs'

Alpine.store('images', {
    image_1: new URL('./assets/1 rood.png', import.meta.url),
    image_2: new URL('./assets/2 rood.png', import.meta.url),
    image_3: new URL('./assets/3 rood.png', import.meta.url),
    image_4: new URL('./assets/4 rood.png', import.meta.url),
})

window.Alpine = Alpine

Alpine.start()
