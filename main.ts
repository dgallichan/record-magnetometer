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
    basic.showString("Deleting log")
    datalogger.deleteLog(datalogger.DeleteType.Fast)
})
let logging = false
logging = false
datalogger.setColumns([
"mx",
"my",
"mz",
"mmag"
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
        datalogger.createCV("mmag", input.magneticForce(Dimension.Strength))
        ])
    }
})
