basic.forever(function () {
    led.plotBarGraph(
    input.magneticForce(Dimension.Strength),
    2000
    )
    basic.pause(100)
})
