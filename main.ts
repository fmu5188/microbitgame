let x_value = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        x_value = randint(0, 4)
        led.plot(x_value, 2)
        basic.pause(1000)
        led.unplot(x_value, 2)
        basic.pause(1000)
        led.plot(2, 1)
        basic.pause(1000)
        led.unplot(2, 1)
        basic.pause(1000)
        led.plot(2, 3)
        basic.pause(1000)
        led.unplot(2, 3)
        basic.pause(1000)
        led.plot(1, 2)
        basic.pause(1000)
        led.unplot(1, 2)
        basic.pause(1000)
        led.plot(3, 2)
        basic.pause(1000)
        led.unplot(3, 2)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
