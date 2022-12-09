value = 0
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
strip.set_brightness(50)
index = 0

def on_forever():
    global value, index
    value = pins.map(pins.analog_read_pin(AnalogPin.P1),
        5,
        800,
        1,
        Math.round(24))
    for index2 in range(value):
        strip.set_pixel_color(index, neopixel.colors(NeoPixelColors.INDIGO))
        index += 1
    strip.show()
    basic.pause(200)
    strip.clear()
    index = 0
basic.forever(on_forever)
