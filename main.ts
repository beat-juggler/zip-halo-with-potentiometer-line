let pixel = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.setBrightness(30)
let index = 1
basic.forever(function () {
    pixel = pins.map(
    pins.analogReadPin(AnalogPin.P1),
    5,
    800,
    1,
    Math.round(24)
    )
    for (let index2 = 0; index2 < pixel; index2++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
        index += 1
    }
    strip.show()
    strip.clear()
    index = 0
})
