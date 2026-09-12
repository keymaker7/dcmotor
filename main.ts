input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(50, -50)
    wuKong.setLightMode(wuKong.LightMode.BREATH)
})
input.onButtonPressed(Button.B, function () {
    wuKong.setAllMotor(0, 0)
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
let strip: neopixel.Strip = null
let 거리 = 0
basic.forever(function () {
	
})
