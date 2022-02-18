function animateDelete () {
    dispDelay = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(dispDelay)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(dispDelay)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(dispDelay)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `)
    basic.pause(dispDelay)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(dispDelay)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        # . . . #
        # # . # #
        `)
    basic.pause(dispDelay)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.pause(dispDelay)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
datalogger.onLogFull(function () {
    logging = false
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    animateDelete()
    datalogger.deleteLog(datalogger.DeleteType.Fast)
})
let dispDelay = 0
let logging = false
logging = false
datalogger.setColumns([
"mx",
"my",
"mz",
"mmag",
"ax",
"ay",
"az"
])
basic.showLeds(`
    # # # # #
    # . # . #
    # # # # #
    # . # . #
    # # # # #
    `)
loops.everyInterval(100, function () {
    if (logging) {
        datalogger.logData([
        datalogger.createCV("mx", input.magneticForce(Dimension.X)),
        datalogger.createCV("my", input.magneticForce(Dimension.Y)),
        datalogger.createCV("mz", input.magneticForce(Dimension.Z)),
        datalogger.createCV("mmag", input.magneticForce(Dimension.Strength)),
        datalogger.createCV("ax", input.acceleration(Dimension.X)),
        datalogger.createCV("ay", input.acceleration(Dimension.Y)),
        datalogger.createCV("az", input.acceleration(Dimension.Z))
        ])
    }
})
